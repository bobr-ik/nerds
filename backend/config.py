from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path
from pydantic import Field, BaseModel

BASE_DIR = Path(__file__).resolve().parent.parent

class Settings(BaseModel):
    db_url: str = Field(default=f'sqlite+aiosqlite:///{BASE_DIR}/backend/database/data.db', validate_default=False) # по этому адресу создатся файл с бд

    # model_config = SettingsConfigDict(env_file=f"{BASE_DIR}/.env")

settings = Settings() # объект класса настроек
