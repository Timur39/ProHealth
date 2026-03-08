from sqlalchemy import Column, Integer, String, Text
from app.db.base import Base

class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    content = Column(Text)
