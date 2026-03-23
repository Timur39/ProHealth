from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import articles


app = FastAPI(title="ProHealth API")

app.include_router(articles.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost",
        "http://127.0.0.1:3000",
        "http://127.0.0.1",
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "http://127.0.0.1:5173",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["GET", "PUT", "POST", "DELETE"],
    allow_headers=["*"],
    expose_headers=["*"],
)
