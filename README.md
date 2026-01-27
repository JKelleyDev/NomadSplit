# NomadSplit

A collaborative travel planning app built with Expo (React Native) and FastAPI.

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
- **Infrastructure:** Docker