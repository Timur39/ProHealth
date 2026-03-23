from app.dependencies.db import sessionDep
from app.models.article import ArticleModel


class ArticleService:
    # Получить все статьи
    @staticmethod
    async def get_all_articles(article_data, db: sessionDep):
        article = ArticleModel(slug=article_data.slug,
                               title=article_data.title,
                               content=article_data.content)
        db.add(article)
        await db.commit()
        return article

    @staticmethod
    async def get_article_by_slug(article_slug: int, db: sessionDep):
        article = await db.get(ArticleModel, id=article_slug)

    @staticmethod
    async def create_article(article_data, db: sessionDep):
        article_slug = article_data.slug.lower().replace('', '-')


    @staticmethod
    async def update_article():
        pass

    @staticmethod
    async def delete_article():
        pass

