import redis.asyncio as redis

redis_client = redis.from_url(
    "redis://localhost",
    encoding="utf-8",
    decode_responses=True
)
