---
# Reusable Skill definition (SAMPLE)
#
# HOW TO USE: Copy this file to the repository root as
#   .github/skills/task-crud.skill.md
# (remove the ".sample" suffix). Invoke it from the custom agent, e.g.
# "Using the task-crud skill, add priority and dueDate to tasks."
name: task-crud
description: >-
  Add a complete CRUD feature slice to the Task Manager: extend the data model,
  wire the API, update the UI, and verify with Playwright.
---

# Skill: Add a CRUD feature slice to the Task Manager

Use this recipe whenever you add a new task attribute or capability. It defines
the contract, the files to touch, and the acceptance tests that must pass.

## Inputs
- **Field(s)/capability** to add (e.g. `priority`, `dueDate`, a filter, a sort).
- **Validation rules** (allowed values, required/optional, formats).

## Steps

### 1. Data model — `src/taskStore.js`
- Extend the task object shape and default new fields sensibly.
- Update `addTask`/`updateTask` so new fields are stored and mutable.
- Keep existing fields backward compatible.

### 2. API — `src/server.js`
- Accept and **validate** new fields on `POST /api/tasks` and `PUT /api/tasks/:id`.
- Return `400` with a JSON error for invalid input; `200/201` on success.
- Preserve existing routes and error handling.

### 3. UI — `public/index.html` + `public/app.js`
- Add form inputs/controls for the new field(s).
- Add filtering and/or sorting controls where relevant.
- Render the new field on each task item.
- Update the UI via fetch without a full page reload.
- If a dashboard/counter is requested, compute and display it from current tasks.

### 4. Tests — `tests/ui.spec.js`
- Add or update a Playwright test that exercises the new behavior end-to-end.
- Prefer accessibility-based selectors (roles/labels) over brittle CSS.

## Acceptance criteria (all must pass)
- [ ] New field is stored, returned by the API, and validated.
- [ ] Invalid input is rejected with a `400` and a JSON error message.
- [ ] The UI lets the user set the field and shows it on each task.
- [ ] Filtering and/or sorting controls work as specified.
- [ ] Any requested dashboard/counter reflects the current tasks.
- [ ] A Playwright test covers the new behavior and passes.
- [ ] Existing task CRUD still works (no regressions).

## Verification
Run the app (`node src/server.js`) and use the Playwright MCP tools to navigate
to http://localhost:3000, exercise the feature, snapshot the accessibility tree,
and take a screenshot. Then run the Playwright test suite and confirm it is green.
