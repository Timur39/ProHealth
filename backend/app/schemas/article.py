from pydantic import BaseModel

class ArticleCreate(BaseModel):
    title: str
    description: str
    content: str
    src: str

class ArticleResponse(BaseModel):
    id: int
    title: str
    description: str | None
    slug: str
    src: str | None
    content: str
    status: str
    author_id: int

    class Config:
        from_attributes = True  # для SQLAlchemy
