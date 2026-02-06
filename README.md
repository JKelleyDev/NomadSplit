# NomadSplit

A collaborative travel planning app built with Expo (React Native) and FastAPI.

![ScreenRecording_02-06-2026 09-16-47_1](https://github.com/user-attachments/assets/d0db3e12-707b-41a0-88fe-91ea05ef5218)
<img width="660" height="1434" alt="IMG_1312" src="https://github.com/user-attachments/assets/7d90801e-a7cb-423e-a992-a7e790f55b56" />

## Project Structure
```
NomadSplit/
├── apps/
│   ├── mobile/                # Expo React Native app (TypeScript)
│   │
│   └── api/                   # FastAPI backend
│       ├── app/
│       │   ├── main.py        # FastAPI entry point
│       │   ├── config.py      # Settings (loads from env)
│       │   ├── database.py    # SQLAlchemy async setup
│       │   └── models.py      # Database models
│       ├── alembic/
│       │   └── versions/      # Migration files
│       ├── pyproject.toml     # Python dependencies
│       └── Dockerfile
│
├── docker-compose.yml         # Runs api + postgres together
└── docs/                      # Documentation
```

## Quick Start

See [docs/setup.md](docs/setup.md) for first-time setup.

See [docs/development.md](docs/development.md) for daily workflow and commands.

## Tech Stack

- **Frontend:** Expo, React Native, TypeScript
- **Backend:** FastAPI, SQLAlchemy, Alembic
- **Database:** PostgreSQL
- **DevOps:** Docker, GitHub Actions, CI/CD
