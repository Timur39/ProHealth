FROM python:3.13-slim

RUN pip install poetry==1.7.1

WORKDIR /app

COPY pyproject.toml poetry.lock ./

RUN poetry install --without=dev --no-ansi --no-root

COPY . .

CMD ["poetry", "run", "python", "main.py"]
