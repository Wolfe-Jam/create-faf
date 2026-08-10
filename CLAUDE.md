<!-- faf:start -->
<!-- faf: create-faf | JavaScript | cli | Create FAF projects - Redirects to @faff/create (Official FAF meta-installer) -->
<!-- faf: claim=project.faf | family=FAF -->

# CLAUDE.md — create-faf

## What This Is

Create FAF projects - Redirects to @faff/create (Official FAF meta-installer)

## Stack

- **Language:** JavaScript
- **Hosting:** npm registry

## Context

- **Who:** developers who naturally type npm create faf (matching the CLI command pattern)
- **What:** Create FAF projects - Redirects to @faff/create (Official FAF meta-installer)
- **Why:** A memorable npm entry point that redirects to the official @faff/create scaffolder
- **Where:** https://github.com/Wolfe-Jam/create-faf
- **When:** Production - published on npm
- **How:** bash npm create faf

---

*STATUS: BI-SYNC ACTIVE — 2026-06-20T01:40:22.640Z*
<!-- faf:end -->

# 🏎️ CLAUDE.md - create-faf
**Redirect Wrapper + Org Strategy**

## PROJECT STATE: ACTIVE 🚀
**Current Position:** Silent traffic cop - redirects to @faff/create
**Tyre Compound:** ULTRASOFT C5 (Maximum Performance)
**License:** MIT (Open Source)

---

## 🚨 IMPORTANT: THIS IS A SILENT UTILITY 🚨

**create-faf is a "traffic cop" redirect - it should be:**
- ✅ Published and maintained (v1.0.0 on npm)
- ✅ Mentioned in docs ("also works")
- ✅ Invisible to users (1 line output, then hands off)
- ❌ NOT featured prominently
- ❌ NOT marketed separately
- ❌ NOT documented extensively

**User Experience:**
```bash
$ npm create faf
Redirecting to @faff/create...
[User never sees create-faf again - wizard starts]
```

**It's like a HTTP 301 redirect:**
- User hits endpoint → Gets redirected → Sees destination
- Invisible operation, seamless UX
- No interaction with redirect itself

---

## 🎨 CORE CONTEXT

### Project Identity
- **Name:** create-faf
- **Version:** 1.0.0 (published on npm)
- **Type:** Silent redirect wrapper (29 lines of code)
- **License:** MIT (open source)
- **Purpose:** Catch users who type `npm create faf` naturally
- **Visibility:** One line of output, then invisible

### Dual Purpose

**1. Silent UX Wrapper (Primary Role)**

Redirects natural typing to the main installer:

```bash
npm create faf     →  redirects to  →  @faff/create
```

**Why it exists:**
- Users type `faf init`, `faf score`, `faf auto` (3 letters)
- Naturally type `npm create faf` (matches CLI pattern)
- But npm org requirements mean real package must be scoped (`@faff/create`)
- So we catch the natural typing and silently redirect

**User visibility:**
```bash
$ npm create faf

Redirecting to @faff/create...

[Immediately launches @faff/create wizard]
[User never interacts with create-faf directly]
```

**Usage stats (estimated):**
- 70% of users: Type `npm create faf` (caught by this package)
- 20% of users: Type `npx @faff/create` (direct, bypass this)
- 10% of users: Find via npm search (see this package listed)

**It's invisible infrastructure** - like DNS or HTTP redirects.

**2. npm Organization Strategy**

Part of the FAF dual-org ecosystem:

```
npm ORG STRATEGY:

faf (unscoped)          @faff (scoped org)
──────────────          ──────────────────
Free & Open Source      Premium & Paid

faf-cli                 @faff/create (meta-installer)
claude-faf-mcp          @faff/turbo (future - premium)
faf-mcp                 @faff/pro (future - premium)
create-faf (redirect)   @faff/* (premium products)
```

**The Strategy:**
- **"faf"** = Free, open source, community packages
- **"@faff"** = Premium, paid, commercial products
- Users know: faf = free, faff = premium features

---

## 🚨 NPM PUBLISH PROTOCOL - MANDATORY 🚨

**CRITICAL RULE: `npm publish` IS FORBIDDEN WITHOUT APPROVAL**

Before ANY npm publish of create-faf:

1. **Follow the appropriate checklist** at `/Users/wolfejam/FAF-GOLD/PLANET-FAF/PUBLISH-PROTOCOL.md`
2. **Run ALL checklist items** (build, tests, version, README, CHANGELOG, etc.)
3. **Request approval** with checklist results in the format specified
4. **Wait for OFFICIAL GO!** from wolfejam

**Required approval signals:**
- ✅ **"GO!"** - Approved to publish
- ✅ **"GREEN LIGHT"** - Approved to publish
- ❌ Anything else - DO NOT PUBLISH

**Why this matters:**
- Trust is everything
- Part of freemium org strategy
- First touch for `npm create faf` users
- Represents the free/open-source brand
- One bad publish can damage monetization strategy

**No exceptions. No shortcuts. Professional. Boring. Trusted.**

---

## 📦 The Redirect Code

### All 29 Lines

```javascript
#!/usr/bin/env node

/**
 * create-faf - Unscoped wrapper for @faff/create
 *
 * Redirects: npm create faf → @faff/create
 */

import { spawn } from 'child_process';

console.log('');
console.log('Redirecting to @faff/create...');
console.log('');

// Run npx @faff/create with all arguments
const args = process.argv.slice(2);
const child = spawn('npx', ['-y', '@faff/create', ...args], {
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
```

**That's it!** Just a redirect wrapper.

---

## 🎯 npm Organization Strategy

### The Free Tier: "faf" (unscoped)

**Published under unscoped names:**
- `faf-cli` - CLI tool (6.5k downloads)
- `claude-faf-mcp` - MCP server (6.7k downloads)
- `faf-mcp` - Universal MCP server
- `create-faf` - This redirect wrapper

**Characteristics:**
- ✅ Free forever
- ✅ Open source (MIT license)
- ✅ Community-driven
- ✅ Core functionality
- ✅ No paywalls, no restrictions

### The Premium Tier: "@faff" (scoped org)

**Published under @faff organization:**
- `@faff/create` - Meta-installer (current)
- `@faff/turbo` - Premium features (future)
- `@faff/pro` - Professional edition (future)
- `@faff/*` - All premium products

**Characteristics:**
- 💰 Paid products
- 🔒 Proprietary features
- 🏢 Commercial licenses
- 💎 Advanced functionality
- 🎯 Professional users

### User Mental Model

```
"I use faf"     →  Free, open source, CLI
"I use faff"    →  Premium, paid, advanced features

npm install faf-cli           →  Free
npm install @faff/pro         →  Paid
```

**Brand Clarity:**
- 3 letters (faf) = Free
- 4 letters (faff) = Premium
- Easy to remember, clear distinction

---

## 🛠️ Development

### Setup

```bash
# This is just one file
chmod +x index.js

# Test locally
node index.js

# Or link globally
npm link
npm create faf
```

### No Build Step

No TypeScript, no build process. Just 29 lines of JavaScript.

---

## 🔗 Ecosystem Position

### Part of Free Tier

**create-faf (this package):**
- Catches users typing `npm create faf`
- Redirects to `@faff/create`
- Part of the free/open-source offering
- MIT license

**Works with:**
- `faf-cli` (free CLI)
- `claude-faf-mcp` (free MCP)
- `faf-mcp` (free universal MCP)

**Redirects to:**
- `@faff/create` (the actual installer)

### Freemium Strategy

```
FREE TIER (faf)           PREMIUM TIER (@faff)
───────────────           ────────────────────
create-faf    →           @faff/create
faf-cli                   @faff/turbo
claude-faf-mcp            @faff/pro
faf-mcp
```

---

## 📚 Future Premium Products

### Under @faff Org

**Planned Premium Packages:**

1. **@faff/turbo** - Universal automation intelligence
   - n8n workflow analysis
   - OpenAI Assistants parsing
   - Make.com scenarios
   - **Price:** $X/month

2. **@faff/pro** - Professional edition
   - Team features
   - Enterprise support
   - Advanced analytics
   - **Price:** $Y/month

3. **@faff/enterprise** - Full enterprise suite
   - Custom deployment
   - On-premise options
   - SLA guarantees
   - **Price:** Custom

**All published under @faff organization for premium branding.**

---

## 🎯 Strategic Position

**Role in Monetization:**
- Free tier attracts users (`npm create faf`)
- Premium tier monetizes power users (`@faff/pro`)
- Clear brand separation (faf vs faff)
- Freemium funnel strategy

**User Journey:**
1. User hears about FAF
2. Runs `npm create faf` (free tier)
3. Gets redirected to `@faff/create`
4. Installs free tools (faf-cli, MCP)
5. Loves FAF, needs more features
6. Upgrades to `@faff/turbo` or `@faff/pro`
7. Revenue! 💰

---

## 📖 Notes for AI Assistants

### When Working in create-faf:

1. **This is a silent utility** - 29 lines, invisible to users
2. **Like a traffic cop** - Redirects and disappears
3. **Part of free tier** - MIT license, open source
4. **Org strategy** - Catches natural typing, redirects to @faff
5. **Don't overthink it** - It's intentionally simple
6. **Don't feature it** - Mention in docs, don't market it
7. **Version sync** - Keep in sync with @faff/create (currently both v1.0.0)

### Where to Mention (Not Feature):

**Documentation (mention as alternative):**
```markdown
## Installation

npm create faff         # Primary method
npm create faf          # Also works (redirects)
npx @faff/create        # Direct method
```

**Do NOT:**
- ❌ Create separate landing page for create-faf
- ❌ Feature it in hero sections
- ❌ Write extensive documentation
- ❌ Market it separately from @faff/create
- ❌ Highlight it over the main package

**DO:**
- ✅ Keep it published (v1.0.0)
- ✅ Mention in quick start ("also works")
- ✅ List in npm search results
- ✅ Maintain version sync with @faff/create
- ✅ Keep redirect working silently

### Understanding the Ecosystem:

- **faf** = Free packages (unscoped)
- **@faff** = Premium packages (scoped org)
- **create-faf** = Bridge between user input and premium installer
- **Freemium model** = Free tier converts to paid

---

**STATUS: PUBLIC - Free Tier Redirect Wrapper**

*Last Updated: 2025*
*License: MIT*
*Strategy: Freemium funnel (faf → @faff)*
*🏎️⚡️_free_tier_gateway*
