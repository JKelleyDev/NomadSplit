# First-Time Setup

## Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Expo Go app on your phone (for mobile testing)

## Setup Steps

1. **Clone the repo**
```bash
   git clone <repo-url>
   cd NomadSplit
```

2. **Start the backend**
```bash
   docker-compose up --build
```
   This starts both the API (port 8000) and Postgres (port 5432).

3. **Run database migrations**
```bash
   docker-compose exec api bash
   alembic upgrade head
```

4. **Start the mobile app** (in a new terminal)
```bash
   cd apps/mobile
   npm install
   npx expo start
```

   Or run directly on a platform:
```bash
   npx expo start --ios        # iOS simulator
   npx expo start --android    # Android emulator
   npx expo start --web        # Web browser
```

5. **Verify it's working**
   - API: http://localhost:8000
   - API docs: http://localhost:8000/docs