FROM python:3.12-slim

WORKDIR /app

COPY poetry.lock poetry.lock
COPY pyproject.toml pyproject.toml

RUN pip install poetry
RUN poetry install

COPY . .

EXPOSE 8000


CMD ["python", "main.py"]
