from database.db import async_session_factory
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from sqlalchemy.ext.asyncio import AsyncSession
from database import models
from api import models as api_models
from datetime import date


async def get_participants():
    async with async_session_factory() as session:
        session: AsyncSession
        users = await session.execute(select(models.UserORM))
        users = users.scalars().all()
        ans = []
        for elem in users:
            print(elem)
            ans += [api_models.UserForMainPage.model_validate(elem)]
        return ans


async def get_user(id: int):
    async with async_session_factory() as session:
        session: AsyncSession
        user = await session.execute(
            select(models.UserORM)
            .where(models.UserORM.id == id)
            .options(selectinload(models.UserORM.badges))
            .options(selectinload(models.UserORM.skills))
        )
        user: models.UserORM = user.scalars().first()

        return api_models.User.model_validate(user)


async def get_badges():
    async with async_session_factory() as session:
        session: AsyncSession
        badges = await session.execute(select(models.BadgeORM))
        badges = badges.scalars().all()
        ans = []
        for elem in badges:
            print(elem)
            ans += [api_models.Badge.model_validate(elem)]
        return badges