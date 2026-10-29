# create-faf

**Unscoped wrapper for [@faff/create](https://npmjs.com/package/@faff/create)** — catches developers who naturally type `npm create faf`.

⭐ [Star it on GitHub](https://github.com/Wolfe-Jam/create-faf): bookmarks it for you, helps other devs find it too.

[![npm version](https://img.shields.io/npm/v/create-faf)](https://npmjs.com/package/create-faf)
[![npm downloads](https://img.shields.io/npm/dt/create-faf)](https://npmjs.com/package/create-faf)
[![license](https://img.shields.io/npm/l/create-faf)](https://github.com/Wolfe-Jam/create-faf/blob/main/LICENSE)

---

## What is FAF?

[.faf](https://faf.one) is an IANA-registered format (`application/vnd.faf+yaml`) for persistent AI project context — context that survives across sessions, models, and tools. This package isn't the format itself; it's a tiny redirect utility that gets you to the real installer.

---

## Usage

```bash
npm create faf
```

Redirects straight to `@faff/create`, the official FAF meta-installer. Same result either way.

---

## Why two packages?

FAF's CLI commands are all short: `faf init`, `faf auto`, `faf score`. People naturally type `npm create faf` to match. The real installer needed a scoped npm name (`@faff/create`), so this package exists purely to catch that instinct and hand off — nothing more.

- **`create-faf`** (this package) — catches the natural "faf" typers
- **`@faff/create`** — the actual installer, in the `@faff` org

Both commands produce the identical result.

---

## What it actually does

The entire package is a redirect. No dependencies, no build step, no logic beyond the handoff:

```js
import { spawn } from 'child_process';
const args = process.argv.slice(2);
spawn('npx', ['-y', '@faff/create', ...args], { stdio: 'inherit', shell: true });
```

That's genuinely all of it — see [`index.js`](./index.js).

---

## Requirements

Node.js 18+

---

## Resources

- **Website:** https://faf.one
- **Live download stats:** https://faf.one/downloads
- **npm org:** https://npmjs.com/org/faff
- **Issues:** https://github.com/Wolfe-Jam/create-faf/issues

---

## License

MIT — free forever

---

Built by [wolfejam.dev](https://wolfejam.dev)
