from pydantic import BaseModel

class ArticleCreate(BaseModel):
    title: str
    content: str
    src: str

class ArticleResponse(BaseModel):
    id: int
    title: str
    slug: str
    src: str | None
    content: str
    status: str
    author_id: int

    class Config:
        from_attributes = True  # для SQLAlchemy
