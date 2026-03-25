from fastapi import APIRouter, HTTPException

from app.dependencies.db import sessionDep
from app.dependencies.auth import adminDep
from app.services.article_service import ArticleService
from app.schemas.article import ArticleResponse

router = APIRouter(prefix="/admin", tags=["Admin"])

# 📋 Все статьи на модерацию
@router.get("/articles/pending", response_model=list[ArticleResponse])
async def get_pending_articles(
    db: sessionDep,
    admin: adminDep,
):
    return await ArticleService.get_pending_articles(db)

# ✅ Одобрить статью
@router.post("/articles/{article_id}/approve")
async def approve_article(
    article_id: int,
    db: sessionDep,
    admin: adminDep,
):
    article = await ArticleService.approve_article(db, article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"message": "Article approved"}

# ❌ Отклонить
@router.post("/articles/{article_id}/reject")
async def reject_article(
    article_id: int,
    db: sessionDep,
    admin: adminDep,
):
    success = await ArticleService.reject_article(db, article_id)

    if not success:
        raise HTTPException(status_code=404, detail="Article not found")

    return {"message": "Article rejected"}
