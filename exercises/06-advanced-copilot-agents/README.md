# Exercise 6 (Bonus): Advanced Copilot — Custom Agents, Skills & MCP (90 minutes)

> 🧪 **Bonus / Advanced Track.** This exercise assumes you have completed
> [Exercise 5: Real-World Project](../05-real-world-project/README.md) and have a working
> Task Manager app. Instead of simple completions and chat, you will orchestrate an
> **end-to-end feature** using a **custom Copilot agent**, a reusable **skill**, and the
> **Playwright MCP server** to visually verify the UI in a real browser.

## Objective

Use a **custom agent + skill + Playwright MCP** to add and *visually verify* a non-trivial
feature on top of the Exercise 5 Task Manager:

> **Feature to build:** Task **priority** and **due-date**, with **filtering & sorting**,
> plus a small **status dashboard** (counts of overdue / due-soon / completed tasks).

By the end you will have driven the whole loop — *plan → implement → verify in a real
browser → fix → re-verify* — mostly from Copilot Chat in **agent mode**.

## Prerequisites

✅ **Before you start, ensure you have:**
- A completed, working **Exercise 5** Task Manager app (`exercises/05-real-world-project`)
- **VS Code** with the latest **GitHub Copilot** & **Copilot Chat** extensions (agent mode enabled)
- **Node.js 16+** and `npm`
- Ability to run `npx playwright install` (downloads browser binaries locally)
- A terminal where you can run the Exercise 5 server (`node src/server.js`)

> 💡 **Why "local"?** Everything in this exercise runs **locally in VS Code** against your
> local clone. It does **not** require your repo to be hosted on GitHub, so cloud-only
> features (the Copilot coding agent, PR summaries, code review on GitHub.com) are out of
> scope here. See [Advanced Local Copilot Capabilities to Try](#-advanced-local-copilot-capabilities-to-try).

## Setup (5 minutes)

1. **Work against the Exercise 5 app.** This exercise adds features to that codebase:
   ```bash
   cd exercises/05-real-world-project
   npm install
   node src/server.js   # serves the app at http://localhost:3000
   ```

2. **Copy in the sample templates.** This folder ships inert `.sample` templates so the
   workshop repo's own configuration is never overwritten. You'll copy them to their real
   locations as you go:
   ```
   exercises/06-advanced-copilot-agents/
   ├── README.md                                  ← you are here
   ├── .github/
   │   ├── copilot-instructions.sample.md         → copy to <repo>/.github/copilot-instructions.md
   │   ├── agents/
   │   │   └── task-feature.agent.sample.md        → copy to <repo>/.github/agents/task-feature.agent.md
   │   └── skills/
   │       └── task-crud.skill.sample.md           → copy to <repo>/.github/skills/task-crud.skill.md
   ├── mcp.sample.json                             → copy to <repo>/.vscode/mcp.json
   └── tests/
       └── ui.spec.sample.js                       → reference solution for your Playwright test
   ```

> ⚠️ **Keep the `.sample` suffix on the originals.** Copy them out and rename when you
> activate each one. This keeps the workshop repo clean and lets you re-run the exercise.

---

## Step 1: Custom Repository Instructions (10 minutes)

**Repository custom instructions** teach Copilot about *your* project so every chat and
agent request follows your conventions automatically. They live at
`.github/copilot-instructions.md` at the repo root.

### Challenge 6.1: Add project instructions

1. Open [`.github/copilot-instructions.sample.md`](./.github/copilot-instructions.sample.md).
2. Copy it to the **repo root** as `.github/copilot-instructions.md`.
3. Tailor it to the Task Manager: coding conventions, the file layout
   (`src/taskStore.js`, `src/server.js`, `public/index.html`, `public/app.js`), and the
   rule **"always add or update tests for behavior changes."**
4. Open Copilot Chat and ask `@workspace what conventions should I follow in this repo?` —
   confirm it echoes your instructions.

> ✅ **Checkpoint:** Copilot's answers now reflect your project rules without you
> restating them each time.

---

## Step 2: Define a Custom Agent (15 minutes)

A **custom agent** is a named, purpose-built assistant with a defined role, an allowed
toolset, and guardrails — more focused and repeatable than ad-hoc chat. In VS Code you
define one in `.github/agents/<name>.agent.md`.

> 🧭 **Local vs. cloud:** This is the **VS Code (local) custom agent** capability. It is
> distinct from the **cloud Copilot coding agent** that runs on GitHub.com and opens PRs.
> Here everything runs in your editor against your local files.

### Challenge 6.2: Author the "Feature Builder" agent

1. Open [`.github/agents/task-feature.agent.sample.md`](./.github/agents/task-feature.agent.sample.md).
2. Copy it to `.github/agents/task-feature.agent.md`.
3. Review its structure:
   - **Role/persona:** "Feature Builder for the Task Manager."
   - **Scope:** only the Exercise 5 app files.
   - **Allowed tools:** editing, running tests, and the Playwright MCP browser tools.
   - **Guardrails:** keep changes minimal, always add tests, verify in the browser before declaring done.
4. In Copilot Chat, switch to **agent mode** and select/invoke your custom agent.
5. Give it a warm-up task: *"Summarize the current Task data model and the API routes."*

> ✅ **Checkpoint:** The agent responds in its defined role and understands the codebase.

---

## Step 3: Author a Reusable Skill (15 minutes)

A **skill** is packaged, repeatable instructions your agent can call — a reliable recipe
for a common workflow. Here the skill encodes *how to add a full CRUD feature slice* to the
Task Manager so every feature is implemented consistently.

### Challenge 6.3: Create the `task-crud` skill

1. Open [`.github/skills/task-crud.skill.sample.md`](./.github/skills/task-crud.skill.sample.md).
2. Copy it to `.github/skills/task-crud.skill.md`.
3. Read the contract it defines:
   - **Data model:** extend the task object in `src/taskStore.js`.
   - **API surface:** validate/accept new fields in `src/server.js` routes.
   - **UI:** add inputs/controls in `public/index.html` and behavior in `public/app.js`.
   - **Acceptance tests:** the Playwright checks that must pass.

### Challenge 6.4: Build the feature with agent + skill

Prompt your custom agent (agent mode) to apply the skill:

> *"Using the `task-crud` skill, add `priority` (low/medium/high) and `dueDate` to tasks.
> Add API validation, UI inputs, filtering by priority and status, sorting by due date, and
> a status dashboard showing overdue / due-soon / completed counts. Follow the skill's
> acceptance criteria."*

Let the agent implement across `taskStore.js`, `server.js`, `index.html`, and `app.js`.

> ✅ **Checkpoint:** The feature slice compiles and the server still serves the app.

---

## Step 4: Set Up the Playwright MCP Server (10 minutes)

The **Model Context Protocol (MCP)** lets Copilot use external tools. The **Playwright MCP
server** exposes real browser actions (navigate, snapshot, click, type, screenshot) to the
agent so it can *drive and inspect your running UI*.

### Challenge 6.5: Register and start Playwright MCP

1. Open [`mcp.sample.json`](./mcp.sample.json).
2. Copy it to `.vscode/mcp.json` at the repo root (create `.vscode/` if needed).
3. Install browser binaries:
   ```bash
   npx playwright install
   ```
4. Make sure the Exercise 5 app is running:
   ```bash
   cd exercises/05-real-world-project
   node src/server.js
   ```
5. In VS Code, reload/enable the MCP server. In Copilot Chat (agent mode) you should now see
   Playwright browser tools become available.

> ✅ **Checkpoint:** The agent lists Playwright tools such as `navigate`, `snapshot`,
> `click`, and `take_screenshot`.

---

## Step 5: Verify the UI via the MCP Server (15 minutes)

### Challenge 6.6: Drive and inspect the browser

Ask the agent to verify the new feature using the Playwright MCP tools:

> *"Using the Playwright MCP tools, open http://localhost:3000, add a high-priority task due
> tomorrow, toggle its completion, filter to show only high-priority tasks, sort by due
> date, take an accessibility snapshot and a screenshot, and confirm the dashboard counts
> update. Report anything that doesn't match the expected behavior."*

The agent should:
- **Navigate** to the running app.
- **Snapshot** the accessibility tree (better than a screenshot for asserting structure).
- **Interact** (fill inputs, click add/toggle/filter/sort).
- **Screenshot** for a visual record.
- **Assert** the DOM and dashboard reflect the feature.

### Challenge 6.7: Generate a durable regression test

Have the agent turn the manual verification into a committed test:

> *"Generate a Playwright test `tests/ui.spec.js` that automates the checks you just
> performed so we have a durable regression test."*

Compare your result to the reference at
[`tests/ui.spec.sample.js`](./tests/ui.spec.sample.js).

> ✅ **Checkpoint:** A Playwright test exists and passes against the running app.

---

## Step 6: Close the Agentic Loop (10 minutes)

### Challenge 6.8: Implement → verify → fix → re-verify

Deliberately introduce a small bug (e.g., break the due-date sort) and prompt:

> *"Run the Playwright checks. If anything fails, read the failure, fix the code, and
> re-verify until the `task-crud` skill's acceptance criteria pass."*

Watch the agent run the loop end-to-end: it reads the failing assertion, edits the code,
re-runs the browser checks via the Playwright MCP server, and confirms green.

> ✅ **Checkpoint:** You've experienced a self-correcting agent loop grounded in real
> browser verification.

---

## ✅ Success Criteria

- [ ] Custom repository instructions (`.github/copilot-instructions.md`) are applied
- [ ] A custom agent (`.github/agents/task-feature.agent.md`) is defined and invoked
- [ ] The `task-crud` skill drives a complete feature slice (model → API → UI)
- [ ] The Playwright MCP server is registered and navigates/inspects the running UI
- [ ] Priority, due-date, filtering, sorting, and the status dashboard work in the browser
- [ ] A passing Playwright test (`tests/ui.spec.js`) is committed as a regression check
- [ ] You've run the agentic implement → verify → fix → re-verify loop at least once

---

## 🚀 Advanced Local Copilot Capabilities to Try

These all run **locally in VS Code** against your local clone — no GitHub hosting required.
Great for repos that aren't on GitHub.

- **Agent mode** in Copilot Chat — multi-step, tool-using automation on the local repo.
- **Custom agents & chat modes** — purpose-built assistants (like the one you built above).
- **`.github/copilot-instructions.md`** — project-wide custom instructions.
- **Reusable prompt files** (`*.prompt.md`) and **skills** — packaged, repeatable workflows.
- **More MCP servers locally** — register additional servers in `.vscode/mcp.json`, e.g.:
  - **Filesystem** — scoped file access
  - **Git** — local history/blame/diff context
  - **SQLite / database** — query a local DB
  - **Fetch** — pull in web content
  - **Playwright** — browser automation (used in this exercise)
- **Context tools** — `@workspace` / `#codebase`, and reference files/symbols with `#`.
- **Slash commands** — `/explain`, `/fix`, `/tests`, `/doc` in chat and inline chat.
- **Copilot Edits (multi-file editing)** — coordinated refactors across files.
- **Model selection** — switch models in the chat model picker for different tasks.
- **Next Edit Suggestions (NES)** — predicts your next edit as you type.
- **Copilot in the terminal / CLI** — command suggestions and explanations locally.

> ☁️ **Cloud/GitHub-only (out of scope for local-only repos):** the **Copilot coding
> agent** (assign an issue, it opens a PR), **PR summaries**, and **code review on
> GitHub.com**. These require the repo to be hosted on GitHub.

---

## 🔧 Troubleshooting

**1. `npx playwright install` fails or browsers are missing**
- Re-run `npx playwright install`; ensure you have network access and disk space.
- On Linux you may also need `npx playwright install-deps`.

**2. MCP server doesn't connect / no Playwright tools appear**
- Confirm `.vscode/mcp.json` is at the **repo root** and valid JSON.
- Reload VS Code (Command Palette → *Developer: Reload Window*).
- Check the MCP server status/output panel for startup errors.
- Ensure the Copilot Chat extension is up to date and agent mode is enabled.

**3. Port 3000 already in use**
```bash
# Linux/macOS
lsof -i :3000        # find the PID
kill -9 <PID>
# Windows
netstat -ano | findstr :3000
taskkill /F /PID <process-id>
```

**4. Agent can't reach the app**
- Verify the Exercise 5 server is running and reachable at http://localhost:3000.
- Test the API directly: `curl http://localhost:3000/api/tasks`.

**5. The agent isn't following your rules**
- Confirm `.github/copilot-instructions.md` exists at the repo root.
- Re-open the agent definition and check its guardrails section.

---

## 📚 Where to go next

- Revisit the [cheat sheet](../../resources/cheat-sheet.md) and
  [best practices](../../resources/best-practices.md).
- Try wiring a **second MCP server** (Git or SQLite) and have your agent combine tools.
- Package another common workflow as a **skill** and reuse it across features.
