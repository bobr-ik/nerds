from sqlalchemy.orm import Mapped, mapped_column, relationship
from database.db import Base
from sqlalchemy import Table, Column, ForeignKey, func, cast, Date
from sqlalchemy.ext.hybrid import hybrid_property
from datetime import datetime


user_badges = Table(
    "user_badges",
    Base.metadata,
    Column("user_id", ForeignKey("user_orm.id"), primary_key=True),
    Column("badge_id", ForeignKey("badge_orm.id"), primary_key=True),
)


class UserORM(Base):
    __tablename__ = "user_orm"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    telegram: Mapped[str]
    level: Mapped[int]
    levelProgress: Mapped[int]
    avatar: Mapped[str]
    telegramLink: Mapped[str]
    realName: Mapped[str]
    joinDate: Mapped[str]
    idNumber: Mapped[str]
    idBinary: Mapped[str]
    no_az_date: Mapped[str]
    noAz: Mapped[int]
    bio: Mapped[str]
    moodLevel: Mapped[int]
    energyLevel: Mapped[int]

    badges: Mapped[list["BadgeORM"]] = relationship(back_populates="user", secondary=user_badges)
    skills: Mapped[list["SkillORM"]] = relationship(back_populates="user")

    @hybrid_property
    def noAz(self) -> int:
        if not self.no_az_date:
            return 0
        today = datetime.now().date()
        az_date = datetime.strptime(self.no_az_date, "%d.%m.%Y").date()
        delta = today - az_date
        return delta.days

    @noAz.expression
    def noAz(cls):
        return func.coalesce(
            func.extract('day', func.current_date() - cast(cls.no_az_date, Date)),
            0
        )




class BadgeORM(Base):
    __tablename__ = "badge_orm"

    id: Mapped[int] = mapped_column(primary_key=True)
    icon: Mapped[str]
    title: Mapped[str]
    description: Mapped[str]
    user: Mapped[list["UserORM"]] = relationship(back_populates="badges", secondary=user_badges)



class SkillORM(Base):
    __tablename__ = "skill_orm"

    id: Mapped[int] = mapped_column(primary_key=True)
    icon: Mapped[str]
    name: Mapped[str]
    value: Mapped[int]
    user_id: Mapped[int] = mapped_column(ForeignKey("user_orm.id"))
    user: Mapped["UserORM"] = relationship(back_populates="skills")