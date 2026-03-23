from pydantic import BaseModel

class ArticleCreate(BaseModel):
    title: str
    content: str


class ArticleResponse(BaseModel):
    id: int
    title: str
    slug: str
    content: str
    status: str
    author_id: int

    class Config:
        from_attributes = True  # для SQLAlchemy
