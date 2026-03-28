from typing import Annotated

from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt
from sqlalchemy import select

from app.dependencies.db import sessionDep
from app.models.user import User
from app.core.config import settings

security = HTTPBearer()

async def get_current_user(
    db: sessionDep,
    credentials: HTTPAuthorizationCredentials = Depends(security),
):
    token = credentials.credentials

    try:
        payload = jwt.decode(token, settings.AUTH_SECRET_KEY, algorithms=[settings.ALGORITHM])
        user_id = payload.get("user_id")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")

    result = await db.execute(select(User).where(User.id == user_id))
    user = result.scalar_one_or_none()

    if not user:
        raise HTTPException(status_code=401, detail="User not found")

    return user

userDep = Annotated[User, Depends(get_current_user)]


async def get_admin_user(current_user: userDep):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return current_user

adminDep = Annotated[User, Depends(get_admin_user)]
