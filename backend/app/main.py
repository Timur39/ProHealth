import redis

from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend

from app.routes import articles, auth, admin

@asynccontextmanager
async def lifespan(app: FastAPI):
    redis_client = redis.from_url(
        "redis://localhost",
        encoding="utf-8",
        decode_responses=True
    )
    FastAPICache.init(RedisBackend(redis_client), prefix="fastapi-cache")

    app.include_router(articles.router)
    app.include_router(auth.router)
    app.include_router(admin.router)

    yield

app = FastAPI(title="ProHealth API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*"
    ],
    allow_credentials=True,
    allow_methods=["GET", "PUT", "POST", "DELETE"],
    allow_headers=["*"],
    expose_headers=["*"],
)
