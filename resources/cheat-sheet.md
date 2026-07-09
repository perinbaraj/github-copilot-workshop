# GitHub Copilot Cheat Sheet

A quick reference for GitHub Copilot in VS Code. Terminology reflects the current
Copilot experience (built-in **Agent / Plan / Ask** agents, custom agents, and Agent Skills).

> 💡 Copilot evolves quickly. If a name or shortcut differs in your version, check the
> in-product **Agent Customizations** editor (Command Palette → **Chat: Open Customizations**)
> and the [official docs](https://code.visualstudio.com/docs/copilot/overview).

## Inline code completions (in the editor)

| Action | Shortcut (Win/Linux) | Shortcut (macOS) |
|--------|----------------------|------------------|
| Accept suggestion | `Tab` | `Tab` |
| Dismiss suggestion | `Esc` | `Esc` |
| Next / previous suggestion | `Alt+]` / `Alt+[` | `Option+]` / `Option+[` |
| Accept next word | `Ctrl+→` | `Cmd+→` |
| Trigger suggestion manually | `Alt+\` | `Option+\` |
| Open completions panel | `Ctrl+Enter` | `Ctrl+Enter` |

**Next Edit Suggestions (NES):** as you type, Copilot can predict and highlight your *next*
edit elsewhere in the file — press `Tab` to jump to and accept it.

## Copilot Chat

| Action | Shortcut |
|--------|----------|
| Open Chat view | `Ctrl+Shift+I` / `Cmd+Shift+I` |
| Inline chat (edit in place) | `Ctrl+I` / `Cmd+I` |
| Quick chat | `Ctrl+Shift+Alt+L` / `Cmd+Shift+Alt+L` |

### Built-in agents (pick from the agent picker in Chat)

| Agent | Use it for |
|-------|-----------|
| **Ask** | Questions about your code/tech; explanations. Apply code blocks individually. |
| **Plan** | Break a complex change into a structured, reviewable implementation plan, then hand off. |
| **Agent** | Autonomous, multi-step coding: it edits files, runs commands/tools, and iterates. Use for **multi-file edits**. |

> ⚠️ The standalone **Copilot Edits** / **Edit mode** is **deprecated** — use **Agent mode**
> for multi-file changes.

### Slash commands

`/explain`, `/fix`, `/tests`, `/doc`, `/fixTestFailure` — plus any **prompt files** and
**Agent Skills** you've added (each appears as its own `/command`).

### Context references (`#`)

| Reference | What it adds |
|-----------|--------------|
| `#codebase` | Lets Copilot search your whole workspace for relevant context |
| `#file` / drag a file in | A specific file |
| `#selection` | The current editor selection |
| `#<symbol>` | A specific function/class/symbol |
| `#changes` | Your pending source-control changes |
| `#terminalLastCommand` | Output of the last terminal command |

> `@workspace` still works but `#codebase` is the current way to give Chat workspace context.

## Customization files

| File / location | Purpose |
|-----------------|---------|
| `.github/copilot-instructions.md` | Project-wide custom instructions (always applied) |
| `.github/instructions/*.instructions.md` | File-scoped instructions (via glob patterns) |
| `.github/agents/<name>.agent.md` | **Custom agents** (formerly "custom chat modes") |
| `.github/skills/<name>/SKILL.md` | **Agent Skills** — folder-based, an [open standard](https://agentskills.io) |
| `.github/prompts/*.prompt.md` | Reusable **prompt files** (run as `/` commands) |
| `.vscode/mcp.json` | **MCP servers** (external tools: Playwright, Git, DBs, etc.) |

## MCP (Model Context Protocol)

Register servers in `.vscode/mcp.json` to give agents extra tools (e.g. the **Playwright MCP**
server for real-browser automation — see Exercise 6). In a custom agent's `tools` list, include
all of a server's tools with the `<server-name>/*` format.

## Copilot beyond the editor

- **Copilot in the terminal / CLI** — command suggestions and explanations.
- **Copilot cloud agent** (on GitHub.com) — assign an issue and it opens a PR.
- **Code review & PR summaries** on GitHub.com.
