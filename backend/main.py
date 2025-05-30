from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from database import orm
from api.views import router


@asynccontextmanager
async def lifespan(app: FastAPI):
    await orm.create_table()
    await orm.insert_data()
    yield


app = FastAPI(lifespan=lifespan)
app.include_router(router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)