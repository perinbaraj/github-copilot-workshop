# GitHub Copilot Best Practices

Practical tips to get high-quality results from GitHub Copilot. These apply across the
workshop exercises.

## 1. Write clear, specific prompts

Copilot responds to intent and context. The more precise you are, the better the output.

- ❌ "Fix this code"
- ✅ "This function throws when `numbers` is an empty array — return 0 instead of NaN."
- ❌ "Sort the array"
- ✅ "Sort the array of user objects by `age` descending, then by `name` ascending."

Include **inputs, outputs, edge cases, and constraints** (performance, libraries to use/avoid).

## 2. Comment-to-code that works

- State parameters and return values explicitly.
- Describe edge cases you care about (empty input, nulls, large data).
- Keep one responsibility per comment; let Copilot fill in the body.

## 3. Pick the right built-in agent

| Situation | Use |
|-----------|-----|
| "How does this work?" / exploring options | **Ask** |
| A big feature you want scoped before coding | **Plan**, then hand off |
| Implement across several files, run tests, iterate | **Agent** |

Multi-file refactors belong in **Agent mode** (the old *Copilot Edits*/*Edit mode* is deprecated).

## 4. Give Copilot the right context

- Add `#codebase` when the answer depends on other files in the project.
- Reference specific files/symbols with `#` instead of pasting large blocks.
- Keep relevant files open; close unrelated ones to reduce noise.

## 5. Encode project knowledge once

- **`.github/copilot-instructions.md`** — conventions, architecture, "always add tests," etc.
  Applied automatically to every request so you don't repeat yourself.
- **Agent Skills** (`.github/skills/<name>/SKILL.md`) — package a *repeatable multi-step
  workflow* (optionally with scripts/templates). Loaded on demand; portable across VS Code,
  the Copilot CLI, and the cloud agent.
- **Prompt files** (`*.prompt.md`) — a single reusable task you invoke as a `/command`.
- **Custom agents** (`.github/agents/<name>.agent.md`) — a persona with a scoped toolset and
  guardrails for a recurring role (e.g. "feature builder," "security reviewer").

**Rule of thumb:** instructions shape *how* code is written; prompt files & skills define
*what* recurring task to do; custom agents define *who* is doing it.

## 6. Always review AI output

- Read generated code before accepting — you own what you merge.
- Verify edge cases and run the tests.
- Watch for security issues: input validation, injection, secrets, unsafe dependencies.
- Ask follow-ups: "What are the trade-offs?", "What edge cases am I missing?"

## 7. Iterate in a loop

Prompt → review → refine. If the first result isn't right, add constraints or context and
ask again rather than hand-editing a flawed suggestion. In **Agent mode**, let it run tests,
read failures, fix, and re-verify.

## 8. Extend with MCP when needed

Use MCP servers (in `.vscode/mcp.json`) to connect Copilot to external tools — e.g. the
**Playwright MCP** server to drive and verify a real browser (Exercise 6), or Git/database
servers for richer context.

## 9. Don't commit secrets

Never let generated code hardcode credentials or tokens. Keep secrets in environment
variables or a secrets manager, and add a note to your `copilot-instructions.md`.
