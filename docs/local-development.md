# Local development

## What works without provider credentials

The automated backend and frontend checks use synthetic data and do not require
production services. The local Compose stack supplies the application database
and Redis plus a local email-capture service, while example files keep payments
disabled and use explicit placeholders for external integrations.

AI analysis, private object storage, real email, payment, and web-push behavior
need separately configured test services. The placeholders do not emulate those
providers and should never be replaced with production credentials on a
developer workstation.

## Prerequisites

- Docker with Compose v2 for the full local stack;
- Node.js 22 and npm for direct frontend work;
- Python 3.12 for direct backend work;
- `antiword` when testing legacy `.doc` parsing outside the backend container.

## Start with Compose

From the repository root:

```bash
test -f backend/.env || cp backend/.env.example backend/.env
test -f frontend/.env.local || cp frontend/.env.example frontend/.env.local
docker compose up --build
```

Default local endpoints:

| Component | Address |
| --- | --- |
| Frontend | `http://localhost:3000` |
| API health | `http://localhost:8000/health` |
| API documentation in development | `http://localhost:8000/docs` |
| Captured development email | `http://localhost:8025` |

Compose applies the Alembic migrations before it starts the API. A separate
migration command is not required for this path.

Stop the stack with `docker compose down`. Add `--volumes` only when you
intentionally want to delete the local database and queue data.

## Configuration

| File | Purpose |
| --- | --- |
| `backend/.env.example` | API, database, Redis, and provider variable names with safe values |
| `frontend/.env.example` | Browser API URL and server-side authentication/mail placeholders |
| `backend/.env` | Ignored developer override; never commit it |
| `frontend/.env.local` | Ignored developer override; never commit it |

Treat all `*_SECRET`, `*_KEY`, token, password, webhook, and private-key values
as secrets even in test environments. A committed example must be an obvious
non-secret placeholder and must not be accepted by a real provider.

## Backend without Compose

Create an environment and install the locked dependencies:

```bash
cd backend
python3.12 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.lock
```

For tests, no PostgreSQL instance is required; the suite configures an isolated
in-memory SQLite database:

```bash
pytest
```

For the running API, set a development `DATABASE_URL`, apply migrations, and
start Uvicorn:

```bash
alembic upgrade head
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

A Redis instance is needed for queued jobs and is recommended for exercising
cache behavior. Start a worker from `backend/` with:

```bash
celery -A app.worker.celery_app worker --loglevel=info
```

Scheduled tasks require a separate Celery Beat process; they are not needed for
the unit and contract test suite.

## Frontend without Compose

```bash
cd frontend
test -f .env.local || cp .env.example .env.local
npm ci
npm run dev
```

The frontend expects the API at the `NEXT_PUBLIC_API_URL` value and requires the
Better Auth server variables in `.env.local`. The example is suitable only for
local evaluation.

To capture authentication email without sending it, start the development
capture endpoint in a second shell:

```bash
cd frontend
node scripts/dev-auth-mail-capture.mjs
```

Captured messages are returned as JSON from `http://localhost:8025/messages`.

## Verification

Backend:

```bash
cd backend
pytest
```

Frontend:

```bash
cd frontend
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Repository hygiene:

```bash
git diff --check
git status --short
```

CI runs the same core checks with read-only repository permissions. CodeQL and
secret scanning are additional repository gates, not replacements for local
review.

## Common failures

- **Frontend fails at startup:** confirm the three Better Auth variables are
  present and use localhost origins that agree with the browser URL.
- **API import fails:** `DATABASE_URL` is required even if a route does not
  immediately query the database.
- **Provider flow fails with a placeholder:** expected; configure a separate
  sandbox integration or use the automated test double.
- **Document upload fails:** object storage is an external dependency; local
  parsing tests do not prove a configured object-storage connection.
- **Background work remains queued:** run Redis and a Celery worker.
