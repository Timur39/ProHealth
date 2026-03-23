from sqlalchemy import Column, Integer, String, Text
from app.db.session import Base

class ArticleModel(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True)
    content = Column(Text, nullable=False)
    status = Column(String, default="pending")
