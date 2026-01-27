from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "My App API"
    debug: bool = True
    database_url: str = "postgresql+asyncpg://postgres:postgres@db:5432/myapp"

    class Config:
        env_file = ".env"

settings = Settings()