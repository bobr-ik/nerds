from pydantic import BaseModel, Field, ConfigDict
from typing import Optional


class OrmModel(BaseModel):
    model_config = ConfigDict(from_attributes=True)


class Badge(OrmModel):
    icon: str = Field(..., example="fas fa-brain", max_length=100, min_length=1, description='Иконка')
    title: str = Field(..., example="Математик-решала", max_length=100, min_length=1, description='Текст')
    description: str = Field(..., example="За выдающиеся успехи в решении олимпиадных задач по математике.", description='Описание')


class Skill(OrmModel):
    name: str = Field(..., example="Математика", max_length=100, min_length=1, description='Название')
    value: int = Field(..., example=100, max=10, min=1, description='Значение')
    icon: str = Field(..., example="fas fa-brain", max_length=100, min_length=1, description='Иконка')


class UserForMainPage(OrmModel):
    id: int = Field(..., example=1, min=1, description='ID')
    name: str = Field(..., example="Граф Бомбус Дэбчанский", max_length=100, min_length=1, description='Ник')
    telegram: str = Field(..., example="@Boberus", max_length=100, min_length=1, description='Telegram')
    level: int = Field(..., example=1, min=1, description='Уровень')
    levelProgress: int = Field(..., example=65, min=0, max=100, description='Прогресс уровня')
    avatar: str = Field(..., example="profile01.png", max_length=100, min_length=1, description='Аватар')


class User(UserForMainPage):
    realName: str = Field(..., example="Авраменко Антон", max_length=100, min_length=1, description='Реальные ФИ')
    joinDate: str = Field(..., example="31.05.2025", max_length=100, min_length=1, description='Дата вступления')
    telegramLink: str = Field(..., example="https://t.me/Boberus", max_length=100, min_length=1, description='Ссылка на Telegram')
    idNumber: str = Field(..., example="01", max_length=10, min_length=1, description='Порядковый номер')
    idBinary: str = Field(..., example="1110", max_length=20, min_length=1, description='Порядковый номер в двоичном виде')
    noAz: int = Field(..., example=228, min=0, description='Количество дней без АЗ')
    badges: list[Badge] = Field(..., example=[{"icon": "fas fa-brain", "text": "Математик-решала"}], description='Бейджи')
    bio: str = Field(..., example="Всем привет!", description='Биография')
    skills: list[Skill] = Field(..., example=[{"name": "Математика", "value": "100%"}], description='Навыки')
    moodLevel: int = Field(..., example=5, min=1, max=10, description='Уровень настроения')
    energyLevel: int = Field(..., example=5, min=1, max=10, description='Уровень энергии')

