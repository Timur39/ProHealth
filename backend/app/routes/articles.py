from fastapi import APIRouter
from fastapi_cache.decorator import cache
from app.dependencies.db import sessionDep
from app.services.article_service import ArticleService

router = APIRouter(prefix='/articles', tags=['Articles'])

@router.get('/', summary='Получить все статьи')
@cache(expire=360)
async def get_all_articles_router(db: sessionDep):
    all_articles = await ArticleService.get_all_articles(db)
    return all_articles



@router.get('/{slug}', summary="Получить статью по slug'у")
@cache(expire=360)
async def get_article_by_slug_router():
    pass

@router.post('/create_article', summary="Создать статью")
async def create_article_router():
    pass

@router.delete('/delete_article/{slug}', summary="Удалить статью")
async def delete_article_router():
    pass
