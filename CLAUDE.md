# Dr. Gaurav Jain speaker site: instructions for Claude Code

You are working on a live client website. Two people edit it, each with their own Claude Code. Follow this file exactly.

- **What it is:** a static site with `index.html`, `styles.css`, `site.js` and `assets/`. There is no build step, no framework and no package install.
- **Live URL:** https://gaurav-jain-site.vercel.app
- **Repo:** https://github.com/angrynoodles591/gaurav-jain-site
- **Hosting:** Vercel is connected to this repo. **A push to `main` goes live within about a minute.** A push to any other branch gets its own preview URL and does not touch the live site.

## The workflow

### 1. First-time setup (once per computer)

1. Check the tools: `git --version`, `python3 --version` and `gh --version`.
   - If `gh` is missing, tell the user to install it from https://cli.github.com.
2. Check the GitHub sign-in: `gh auth status`.
   - If they're not signed in, start `gh auth login --hostname github.com --git-protocol https --web` and let the user finish it in their browser. Never ask for or type their password or one-time codes.
   - Once they're signed in, run `gh auth setup-git`.
3. Set the commit identity for this repo only, using their GitHub no-reply email:
   ```bash
   gh api user --jq '"\(.id)+\(.login)@users.noreply.github.com"'
   ```
   ```bash
   git config user.name "<their name>"
   ```
   ```bash
   git config user.email "<the no-reply address>"
   ```
4. Check push access: run `gh repo view angrynoodles591/gaurav-jain-site --json viewerPermission`.
   - It must say `WRITE` or `ADMIN`.
   - If it doesn't, the user hasn't accepted the collaborator invite yet. Tell them to check their GitHub notifications or email.

### 2. Before every piece of work

- Run `git pull --rebase origin main`, because the other person may have pushed since your last session.
- Start the local preview:
  - In the Claude desktop app, use the `site` entry in `.claude/launch.json` (`preview_start` with name `site`).
  - Otherwise run `python3 -m http.server 4321` from the repo root.
- The site is at http://localhost:4321.

### 3. Making changes: localhost only

- Edit the files and check the result on localhost. Show the user screenshots.
- Check at a desktop width (1440px) and a phone width (390px).
- Check that nothing scrolls sideways and that text keeps readable contrast.
- Check that motion still works with "reduce motion" turned on.
- When you change `styles.css` or `site.js`, bump the `?v=` number on their tags in `index.html`. Use the same number for both. This forces visitors' browsers to load the new files.
- **Do not commit, push or deploy while working.** Stay on localhost until the user explicitly says to deploy, publish, push or go live.

### 4. Deploying, only when the user says so

1. `git pull --rebase origin main`. If there are conflicts, resolve them, show the user and re-check on localhost.
2. Run `git status` and `git diff --stat`. Make sure only the intended files changed. Never commit `.env*`, `.vercel/`, `.backup/` or `.impeccable/`; `.gitignore` already covers them.
3. Commit with a clear message that says what changed and why.
4. `git push origin main`.
5. Wait about 30 to 60 seconds, then check the live site:
   - `curl -s https://gaurav-jain-site.vercel.app/ | grep -o 'styles.css?v=[0-9]*'` should show the new version number.
   - Spot-check the changed content in the live HTML or in a browser.
6. Tell the user it's live, and what changed.

If something goes wrong:

- **Push rejected:** pull with rebase and push again. **Never force-push**, and never rewrite history on `main`.
- **Vercel deploy shows "Blocked" or "Error":** tell the user. The project owner can see why in the Vercel dashboard. It may need the owner to upgrade Vercel to Pro, or to push the change themselves.
- **Rolling back:** if the user wants to undo a deploy, `git revert <commit>` and push. Don't reset or delete commits.

## Design system: keep it

Read `DESIGN.md` before any visual change. It records every decision and why it was made. These rules come from the client and are not up for reinterpretation.

**Layout**
- Sections strictly alternate dark and light. The order is:
  hero (dark) → "Seen at" logos (light) → book (dark) → about (light) → products (dark) → framework (light) → speaking and sessions (dark) → invite (light) → footer (dark).
  If you add or remove a section, keep the alternation.
- Keep it simple: no carousels, no auto-advancing sliders, no interactive diagrams.

**Colours**

| Colour | Used for |
|---|---|
| Deep navy `#16215B` | Dark sections and body text |
| Warm off-white `#F4EFE6` | Light sections. **No blue-white backgrounds.** |
| Warm white `#FFFCF7` | Cards, header, logo strip |
| Royal `#1F299C` | Links, icon fills and script words on light sections |
| Cyan `#30D1FF` | Marks and script words on dark sections |
| Periwinkle `#A3A9F5` | Highlighted words in the hero |
| Orange `#D73D0D` | Buttons only, always with **white** text. This is the client's orange `#F25929` deepened so white text passes contrast. |
| Muted text `#5F6496` | Secondary text |
| Footer `#111A4C` | Footer background |

All colours are CSS variables in `:root` in `styles.css`. Use the variables; don't add new colours.

**Type**
- Inter for everything.
- The handwritten script (Mrs Saint Delafield, class `scr`) is used **only** as the first word of section titles and the "Seen at" label. Nowhere else.
- **No monospace fonts.** Small uppercase labels use the `.mono` class, which is Inter with spaced-out capitals.

**Photos**
- Each photo is a standalone picture in a two-column `.split` layout: hard edges, small radius.
- No gradients, fades, overlays or colour filters on photos.

**Effects**
- No blur on or behind text: no `filter: blur`, and no frosted or `backdrop-filter` surfaces.
- The hex pattern is a fixed background on every section: navy lines on light sections, white lines on dark ones. See the "v42" block near the end of `styles.css`.

**Motion**
- Gentle fades and rises on scroll only; no typing effects.
- Everything respects `prefers-reduced-motion`.

**Accessibility**
- Body text must reach at least 4.5:1 contrast. Check new colour pairings.

## Content rules

- Never invent testimonials, statistics, client logos, awards or quotes. Use only facts the user provides.
- These items are still **placeholders**, waiting on the client:
  - the "Explore the Book" link (`data-placeholder` in `index.html`),
  - the LinkedIn link,
  - `[Email Address]` in the footer.
  Replace them only with real values the user gives you.
- The "Seen at" logos (RPI, NYU Stern, Nasdaq) are real affiliations. Don't add others without the user confirming them.

## Files

| Path | What it is |
|---|---|
| `index.html`, `styles.css`, `site.js`, `assets/` | The live site |
| `DESIGN.md` | Design history and rules. Add a short entry when you make a meaningful design change. |
| `PRODUCT.md` | Who the site is for and what it must do |
| `README.md`, `SETUP.md`, `CLAUDE.md` | Docs. Kept off the live site by `.vercelignore`. |
| `stage-src/`, `assets/stage/` | An old prototype, not used by the live site |
| `.vercelignore` | Controls what Vercel publishes. Any new docs or notes file must be added here so it doesn't go live. |
