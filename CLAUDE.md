# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run a TypeScript file directly (no build step needed):
```bash
npx tsx <file>
# e.g. npx tsx 01-reducer-basics/profile-logic.ts
```

Type-check the entire project:
```bash
npx tsc --noEmit
```

There are no configured lint or test scripts in `package.json`.

## Architecture

This is a TypeScript learning/practice repository. Each numbered folder is a self-contained exercise file — no shared modules or imports between them.

**tsconfig.json** targets `esnext`/`nodenext` with strict mode enabled, plus:
- `noUncheckedIndexedAccess` — array index access returns `T | undefined`
- `exactOptionalPropertyTypes` — optional props cannot be assigned `undefined` explicitly
- `verbatimModuleSyntax` — use `import type` for type-only imports

The `include` path in tsconfig points to `src/**/*`, but exercise files currently live in numbered top-level folders — type-checking those files requires passing them explicitly to `tsc` or adjusting tsconfig.

## MCP Servers

The following MCP servers are available in this session:

| Server | Tools prefix | When to use |
|--------|-------------|-------------|
| **context7** | `mcp__context7__` | Fetch up-to-date library docs (TypeScript, Node, any npm package). Use `resolve-library-id` then `query-docs`. Prefer over web search for API/SDK questions. |
| **GitHub** | `mcp__github__` | Read/write issues, PRs, files, and branches on GitHub repos. |
| **Google Drive** | `mcp__claude_ai_Google_Drive__` | Search, read, create, and copy files in Google Drive. |
| **Gmail** | `mcp__claude_ai_Gmail__` | Search threads, create drafts, and manage labels in Gmail. |
| **Google Calendar** | `mcp__claude_ai_Google_Calendar__` | List, create, update, and respond to calendar events. |
| **Indeed** | `mcp__claude_ai_Indeed__` | Search jobs, get job/company details, and read the stored resume. |
| **fetch** | `mcp__fetch__` | Fetch arbitrary URLs or YouTube transcripts. |
| **memory** | `mcp__memory__` | Persistent knowledge-graph memory across sessions (entities, relations, observations). |
| **sequential-thinking** | `mcp__sequential-thinking__` | Step-by-step reasoning for complex multi-part problems. |
| **everything** | `mcp__everything__` | Utility/testing tools (echo, env vars, structured content, long-running ops). |

### context7 usage pattern
```
1. mcp__context7__resolve-library-id  { libraryName: "typescript" }
2. mcp__context7__query-docs          { context7CompatibleLibraryId: "/...", topic: "..." }
```

## Exercises by topic

| Folder | Topic |
|--------|-------|
| `01-reducer-basics/` | Redux-style reducer with discriminated union action types |
| `02-array-manipulation/` | Immutable array updates by ID using `.map()` + spread |
| `03-lexical-structures-and-types/` | Nullish coalescing, optional params, template literals |
| `04-type-safe/` | Exhaustive checking with `never` in switch statements |
| `05-object-constance/` | `readonly` properties and `Record<K, V>` with `as const` |
