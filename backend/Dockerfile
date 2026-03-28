FROM python:3.13-slim

RUN pip install poetry

WORKDIR /app

COPY pyproject.toml poetry.lock ./

RUN poetry install --without=dev --no-ansi

COPY . .

CMD ["poetry", "run", "python", "main.py"]
