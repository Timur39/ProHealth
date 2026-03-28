from fastapi import APIRouter, HTTPException
from sqlalchemy import select

from app.dependencies.db import sessionDep
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin
from app.core.security import hash_password, verify_password, create_access_token
from app.core.config import settings

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register")
async def register(user: UserCreate, db: sessionDep):
    result = await db.execute(select(User).where(User.email == user.email))
    existing_user = result.scalar_one_or_none()

    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    print(user.email, user.password, user.name)

    new_user = User(
        email=user.email,
        password=hash_password(user.password),
        name=user.name,
        role="admin" if user.email == settings.ADMIN_EMAIL else "user"
    )

    db.add(new_user)
    
    await db.commit()
    await db.refresh(new_user)

    return {"message": "User created"}


@router.post("/login")
async def login(user: UserLogin, db: sessionDep):
    result = await db.execute(select(User).where(User.email == user.email))
    db_user = result.scalar_one_or_none()

    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    token = create_access_token({"user_id": db_user.id})

    return {"access_token": token, "token_type": "bearer"}
