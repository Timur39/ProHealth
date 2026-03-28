FROM python:3.13-slim

WORKDIR /backend

COPY pyproject.toml poetry.lock ./

RUN python -m pip install --default-timeout=100 --index-url https://pypi.org/simple --no-root --no-cache-dir poetry==1.7.1 \
    && poetry config virtualenvs.create false \
    && poetry install --without dev --no-interaction --no-ansi \
    && rm -rf $(poetry config cache-dir)/{cache,artifacts}

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
