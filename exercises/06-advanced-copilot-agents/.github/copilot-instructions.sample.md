# Copilot Repository Custom Instructions (SAMPLE)
#
# HOW TO USE: Copy this file to the repository root as
#   .github/copilot-instructions.md
# then tailor the content below to your project. Remove the ".sample" suffix.
# Copilot Chat and agent mode read this file automatically to follow your
# project's conventions on every request.

# Project: Task Manager (Exercise 5 app)

## What this project is
A small Task Manager with an Express REST API and a vanilla HTML/JS frontend,
using in-memory storage (no database).

## Project layout
- `src/server.js`      — Express server + REST API routes (`/api/tasks`)
- `src/taskStore.js`   — in-memory task storage and CRUD helpers
- `public/index.html`  — task manager UI
- `public/app.js`      — frontend logic (fetch + DOM updates)

## Task data model
A task has: `{ id, title, description, completed, createdAt }`.
When extending it (e.g. `priority`, `dueDate`), keep existing fields backward
compatible and default new fields sensibly.

## Coding conventions
- Use modern JavaScript (ES2020+), `const`/`let`, and arrow functions.
- Keep functions small and single-purpose.
- Validate input in API routes and return proper HTTP status codes with JSON bodies.
- Handle errors gracefully in both the API and the frontend.
- Update the UI without full page reloads (fetch + targeted DOM updates).
- Match the existing formatting and naming style already present in the files.

## Testing expectations
- **Always add or update tests for behavior changes.**
- UI behavior is verified with Playwright tests under `tests/`.
- Prefer accessibility-based selectors (roles, labels) over brittle CSS selectors.

## Guardrails
- Make the smallest change that fully satisfies the request.
- Do not introduce new dependencies unless necessary; prefer the standard library
  and what is already installed.
- Never commit secrets.
