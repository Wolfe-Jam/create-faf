# create-faf

**Unscoped wrapper for [@faff/create](https://npmjs.com/package/@faff/create)**

This package exists as a catch-all for developers who naturally type `npm create faf` (matching the CLI command pattern).

---

## Usage

```bash
npm create faf
```

This automatically redirects to `@faff/create`, the official FAF meta-installer.

---

## Why Two Packages?

**User mental model:**
- FAF CLI commands: `faf init`, `faf auto`, `faf score`
- Users naturally type: `npm create faf` (3 letters, matches CLI)

**We provide both:**
- `create-faf` (this package) - Catches the natural "faf" typers
- `@faff/create` (main package) - Full-featured installer in @faff org

**Both work. Both redirect to the same installer.**

---

## The @faff Organization

This is part of the [@faff npm organization](https://npmjs.com/org/faff).

**All FAF packages:**
- [create-faf](https://npmjs.com/package/create-faf) - This wrapper
- [@faff/create](https://npmjs.com/package/@faff/create) - Main installer
- [faf-cli](https://npmjs.com/package/faf-cli) - CLI (40,600+ downloads)
- [claude-faf-mcp](https://npmjs.com/package/claude-faf-mcp) - MCP server (19,600+ downloads)

---

## Resources

- **Website:** https://faf.one
- **npm Org:** https://npmjs.com/org/faff
- **FAF Format:** Universal AI-context format for ANY AI

---

## License

MIT - Free forever

---

**Championship-grade engineering. F1-inspired performance. Built by [wolfejam.dev](https://wolfejam.dev)**
