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

### 3. Making changes: test, then a preview link

The user's rules: **test before anything is merged, always give a preview link, and make that link impossible to miss.**

- Never edit on `main`. Work on a preview branch: the session's own branch in a cloud session, or `preview/<short-name>` on your own computer.
- Edit the files and test on localhost first:
  - check at desktop (1440px) and phone (390px) widths;
  - check nothing scrolls sideways and text keeps readable contrast;
  - check motion with "reduce motion" turned on.
- When you change `styles.css` or `site.js`, bump the `?v=` number on their tags in `index.html`. Use the same number for both, so visitors' browsers load the new files.
- Commit to the preview branch and push it (`git push -u origin <branch>`). Never push to `main` at this stage. Vercel builds a preview for the branch; it does not touch the live site.
- Wait for the build. The Vercel commit status on GitHub reports success or failure (`https://api.github.com/repos/angrynoodles591/gaurav-jain-site/commits/<sha>/status`).
- Open the preview link and test the change there too.
  - The link is `https://gaurav-jain-site-git-<branch, with / as ->-devesh-9360.vercel.app`.
  - Previews are public, so no login is needed.
- **Show the preview link to the user as a highlighted block, so they can't miss it.** Use this format:

  > ## 🔍 PREVIEW READY
  > **https://…vercel.app**
  > What changed: …  ·  Live site: not changed yet

### 4. Deploying, only when the user says "deploy" or "publish"

1. **Back up the live site first.** Tag the current `main` and push the tag, so any earlier version can be restored:
   ```bash
   git fetch origin main && git tag backup/$(date +%Y-%m-%d)-$(git rev-parse --short origin/main) origin/main && git push origin --tags
   ```
2. Bring the preview branch up to date with `git pull --rebase origin main`. If there are conflicts, resolve them, test again and give a new preview link.
3. Run `git status` and `git diff --stat origin/main`. Make sure only the intended files changed. Never commit `.env*`, `.vercel/`, `.backup/` or `.impeccable/`; `.gitignore` covers them.
4. Push the tested preview branch to `main`: `git push origin <branch>:main`.
5. After about 30 to 60 seconds, check the live site:
   - `curl -s https://gaurav-jain-site.vercel.app/ | grep -o 'styles.css?v=[0-9]*'` should show the new version;
   - spot-check the changed content.
6. **Tell the user it's published, as a highlighted block, so they can't miss it.** Use this format:

   > ## ✅ PUBLISHED — LIVE NOW
   > **https://gaurav-jain-site.vercel.app**
   > What changed: …  ·  Backup of the previous version: `backup/…`

If something goes wrong:

- **Push rejected:** pull with rebase and push again. **Never force-push**, and never rewrite history on `main` or delete backup tags.
- **Vercel deploy shows "Blocked" or "Error":** tell the user, highlighted the same way. The project owner can see why in the Vercel dashboard.
- **Rolling back:** if the user wants to undo a deploy, `git revert <commit>` and push, or restore from a `backup/…` tag with a new commit. Don't reset or delete commits.

## Design system: keep it

Read `DESIGN.md` before any visual change. It records every decision and why it was made. These rules come from the client and are not up for reinterpretation.

**Layout**
- Sections strictly alternate dark and light. The order is:
  hero (dark) → quote (light) → book (dark) → who I work with (light, `#who`) → speaking and sessions (dark) → industry advisory (warm white, `#advisory`) → quote (dark) → invite (light) → footer (dark).
  The warm-white strips (first quote, industry advisory) count as light.
  If you add or remove a section, keep the alternation.
- Keep it simple: no carousels, no auto-advancing sliders, no interactive diagrams. The book in the book section stays still (no spinning, no dragging).

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
| Bright green `#2BD46B` | "Schedule a Call" (header and hero), "Explore the Book", "Explore Synergies", "Invite Dr. Jain to Speak" (Speaking) and the form's "Let’s Connect" buttons only, always with **navy** text. |
| Muted text `#5F6496` | Secondary text |
| Footer `#111A4C` | Footer background |

All colours are CSS variables in `:root` in `styles.css`. Use the variables; don't add new colours.

**Type**
- Inter for everything.
- The handwritten script (Mrs Saint Delafield, class `scr`) is used **only** as the first word of section titles, plus "Marketing" in the hero headline. Nowhere else.
- **No monospace fonts.** Small uppercase labels use the `.mono` class, which is Inter with spaced-out capitals.

**Photos**
- Each photo is a standalone picture in a two-column `.split` layout: hard edges, small radius.
- No gradients, fades, overlays or colour filters on photos. Exceptions the client asked for: the hero, "Who I Work With" and Speaking photos fade into the background at their edges (class `photo-melt`).

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
- Contact details from the client: email `jain@yellowfryum.com` (footer "Contact") and LinkedIn https://www.linkedin.com/in/gauravjainrpi. No placeholders are left.
- The firm logos in Industry Advisory (`assets/logos/advisory/`) are firms Dr. Jain has advised, supplied by the client. They were cut from a small screenshot; replace them with the original files when the client sends them. Don't add others without the client confirming them.
- The "Seen at" logo strip (RPI, NYU Stern, Nasdaq) was replaced by Dr. Jain's quote in v47. The logo files are still in `assets/logos/`; they are real affiliations, so don't add others without the user confirming them.

## Files

| Path | What it is |
|---|---|
| `index.html`, `styles.css`, `site.js`, `assets/` | The live site |
| `DESIGN.md` | Design history and rules. Add a short entry when you make a meaningful design change. |
| `PRODUCT.md` | Who the site is for and what it must do |
| `README.md`, `SETUP.md`, `CLAUDE.md` | Docs. Kept off the live site by `.vercelignore`. |
| `stage-src/`, `assets/stage/` | An old prototype, not used by the live site |
| `.vercelignore` | Controls what Vercel publishes. Any new docs or notes file must be added here so it doesn't go live. |
