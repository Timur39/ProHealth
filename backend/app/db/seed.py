import asyncio

from app.db.session import async_session_maker
from app.models.article import Article
from app.models.user import User
from app.core.security import hash_password

async def seed():
    async with async_session_maker() as db:
        # 👉 создаём тестового пользователя
        user = User(
            email="test@example.com",
            password=hash_password("123456"),
            role="admin"
        )

        db.add(user)
        await db.commit()
        await db.refresh(user)

        # 👉 создаём статьи
        articles = [
            Article(
                title="Первая статья",
                slug="pervaya-statya",
                content="# Привет\nЭто тестовая статья",
                status="approved",
                author_id=user.id
            ),
            Article(
                title="Вторая статья",
                slug="vtoraya-statya",
                content="## ЗОЖ\nПолезная информация",
                status="approved",
                author_id=user.id
            ),
            Article(
                title="Черновик статьи",
                slug="chernovik",
                content="Еще не готово",
                status="pending",
                author_id=user.id
            ),
        ]

        db.add_all(articles)
        await db.commit()

        print("✅ Тестовые данные добавлены")


if __name__ == "__main__":
    asyncio.run(seed())
    