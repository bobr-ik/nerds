from fastapi import APIRouter
from api import models
from database import crud

router = APIRouter()


@router.get("/")
async def root():
    return {"message": "Hello World"}


@router.get("/profile/{id}")
async def get_user(id: int) -> models.User:
    """ Возвращает участника по id """
    return await crud.get_user(id)


@router.get("/participants")
async def get_participants() -> list[models.UserForMainPage]:
    """ Возвращает список участников """
    return await crud.get_participants()


@router.get("/badges")
async def get_badges() -> list[models.Badge]:
    """ Возвращает список бейджей """
    return await crud.get_badges()