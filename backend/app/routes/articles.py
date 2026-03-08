from fastapi import APIRouter
from fastapi_cache.decorator import cache

router = APIRouter(prefix='/articles', tags=['Articles'])

@router.get('/', summary='Получить все статьи')
async def get_all_articles_router():
    return {"message": "Получить все статьи"}

@router.get('/{slug}', summary="Получить статью по slug'у")
async def get_article_by_slug_router():
    pass

@router.post('/create_article', summary="Создать статью")
async def create_article_router():
    pass

@router.delete('/delete_article/{slug}', summary="Удалить статью")
async def delete_article_router():
    pass
