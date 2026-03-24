from fastapi import APIRouter, HTTPException
from fastapi_cache.decorator import cache
from app.dependencies.db import sessionDep
from app.dependencies.auth import userDep
from app.schemas.article import ArticleCreate, ArticleResponse
from app.services.article_service import ArticleService

router = APIRouter(prefix='/articles', tags=['Articles'])

@router.get('/', response_model=list[ArticleResponse], summary='Получить все статьи')
@cache(expire=60)
async def get_all_articles_router(db: sessionDep):
    return await ArticleService.get_all_articles(db)

@router.get('/{slug}', summary="Получить статью по slug'у")
@cache(expire=300)
async def get_article_by_slug_router(slug: str, db: sessionDep):
    return await ArticleService.get_article_by_slug(slug, db)

@router.post('/create_article', response_model=ArticleResponse, summary="Создать статью")
async def create_article_router(data: ArticleCreate, db: sessionDep, current_user: userDep):
    article = await ArticleService.create_article(
        title=data.title, 
        content=data.content, 
        db=db, 
        author_id=current_user.id
    )

    return article


@router.put('/update_article/{slug}', summary="Обновить статью")
async def update_article(
    article_id: int,
    data: ArticleCreate,
    db: sessionDep,
    current_user: userDep
):
    article = await ArticleService.update_article(
        db,
        article_id,
        data.title,
        data.content,
        current_user.id
    )

    if not article:
        raise HTTPException(status_code=404, detail="Article not found")

    return article

@router.delete("/{article_id}")
async def delete_article(
    article_id: int,
    db: sessionDep,
    current_user: userDep
):
    success = await ArticleService.delete_article(
        db,
        article_id,
        current_user.id
    )

    if not success:
        raise HTTPException(status_code=404, detail="Article not found")

    return {"message": "Article deleted"}
