import re

from fastapi import HTTPException

from fastapi_cache import FastAPICache
from sqlalchemy.orm import selectinload
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.article import Article

class ArticleService:

    # Генерация уникального slug'а на основе заголовка статьи
    @staticmethod
    async def generate_unique_slug(db: AsyncSession, title: str) -> str:
        base_slug = re.sub(r"[^\w\s-]", "", title.lower()).strip()
        base_slug = re.sub(r"\s+", "-", base_slug)
        
        slug = base_slug
        index = 1

        while True:
            result = await db.execute(select(Article).where(Article.slug == slug))
            exists = result.scalar_one_or_none()

            if not exists:
                return slug
            
            slug = f"{base_slug}-{index}"
            index += 1

    # Добавление новой статьи
    @staticmethod
    async def create_article(
        title: str,
        content: str,
        db: AsyncSession,
        author_id: int,
    ):
        slug = await ArticleService.generate_unique_slug(db, title)

        article = Article(
            title=title,
            content=content,
            slug=slug,
            author_id=author_id)
        
        db.add(article)
        await db.commit()
        await db.refresh(article)

        await FastAPICache.clear()

        return article
    
    # Получение всех статей
    @staticmethod
    async def get_all_articles(db: AsyncSession):
        result = await db.execute(select(Article))

        return result.scalars().all()

    # Получение статьи по slug'у
    @staticmethod
    async def get_article_by_slug(slug: str, db: AsyncSession):
        result = await db.execute(select(Article).options(selectinload(Article.author)).where(Article.slug == slug))
        article = result.scalar_one_or_none()

        return article
    
    # Получение статьи по id
    @staticmethod
    async def get_article_by_id(article_id: int, db: AsyncSession):
        result = await db.execute(select(Article).where(Article.id == article_id))
        article = result.scalar_one_or_none()
        
        return article

    # Обновление статьи
    @staticmethod
    async def update_article(
        db: AsyncSession,
        article_id: int,
        title: str,
        content: str,
        author_id: int,
    ):
        article = await ArticleService.get_article_by_id(article_id, db)

        # 🔒 Проверка владельца
        if article.author_id != author_id:
            raise HTTPException(status_code=403, detail="Нет доступа")

        # если изменился title → обновить slug
        if article.title != title:
            article.slug = await ArticleService.generate_unique_slug(db, title)

        article.title = title
        article.content = content
        article.status = "pending"

        await db.commit()
        await db.refresh(article)

        await FastAPICache.clear()

        return article

    # Удаление статьи
    @staticmethod
    async def delete_article(
        db: AsyncSession,
        article_id: int,
        author_id: int
    ):
        result = await db.execute(
            select(Article).where(Article.id == article_id)
        )
        article = result.scalar_one_or_none()

        if not article:
            return False

        # 🔒 Проверка владельца
        if article.author_id != author_id:
            raise HTTPException(status_code=403, detail="Нет доступа")

        await db.delete(article)
        await db.commit()

        await FastAPICache.clear()

        return {"message": "Article deleted successfully" }
    
    # 📋 Получение pending статей
    @staticmethod
    async def get_pending_articles(db: AsyncSession):
        result = await db.execute(
            select(Article).where(Article.status == "pending")
        )
        return result.scalars().all()
    
    # ✅ Одобрение статьи
    @staticmethod
    async def approve_article(db: AsyncSession, article_id: int):
        article = await ArticleService.get_article_by_id(article_id, db)
        
        if not article:
            return None

        article.status = "approved"

        await db.commit()
        await db.refresh(article)

        await FastAPICache.clear()

        return article

    # ❌ Отклонение статьи
    @staticmethod
    async def reject_article(db: AsyncSession, article_id: int):
        article = await ArticleService.get_article_by_id(article_id, db)
        
        if not article:
            return None

        article.status = "rejected"

        await db.commit()
        await db.refresh(article)

        await FastAPICache.clear()

        return article