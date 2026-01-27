# Development Workflow

## Running the App

**Backend:**
```bash
docker-compose up
```

**Mobile:**
```bash
cd apps/mobile
npx expo start
```

## Mobile Commands

Run these from `apps/mobile/`:

| Task | Command |
|------|---------|
| Start Expo (interactive) | `npx expo start` |
| Run on iOS simulator | `npx expo start --ios` |
| Run on Android emulator | `npx expo start --android` |
| Run in browser | `npx expo start --web` |
| Clear cache and start | `npx expo start --clear` |

## Common Commands

| Task | Command | Where |
|------|---------|-------|
| Start everything | `docker-compose up` | Root |
| Rebuild containers | `docker-compose up --build` | Root |
| Stop everything | `docker-compose down` | Root |
| View logs | `docker-compose logs -f api` | Root |
| Enter API container | `docker-compose exec api bash` | Root |

## Database Commands

Run these inside the API container (`docker-compose exec api bash`):

| Task | Command |
|------|---------|
| Create migration | `alembic revision --autogenerate -m "description"` |
| Run migrations | `alembic upgrade head` |
| Rollback one migration | `alembic downgrade -1` |
| View migration history | `alembic history` |
| View current version | `alembic current` |

## Editing Code

- Edit files locally with editor
- Backend auto-reloads on save
- Mobile reloads via Expo (shake device or press `r` in terminal)