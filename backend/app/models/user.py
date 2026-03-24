from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.db.session import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    name = Column(String, unique=True)
    password = Column(String)
    role = Column(String, default="user")

    articles = relationship("Article", back_populates="author")
