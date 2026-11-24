# Dr. Gaurav Jain — speaker site

Static site: `index.html`, `styles.css`, `site.js` and `assets/`. No build step, no framework.

**New here?** Start with [`SETUP.md`](SETUP.md). Claude Code follows [`CLAUDE.md`](CLAUDE.md) automatically.

Live: https://gaurav-jain-site.vercel.app

## Publishing

The Vercel project is connected to this repo. **Every push to `main` deploys to production automatically.**
Pushes to other branches get their own preview URL, so use a branch when you want to show a change before it goes live.

## Run it locally

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321. After changing `styles.css` or `site.js`, bump the `?v=` number on their tags in `index.html` so returning visitors get the new files.

## Before you change the design

Read `DESIGN.md` (full history and the reasons behind each choice) and `PRODUCT.md`. The rules the client has set:

- Sections alternate dark and light. Dark is navy `#16215B`; light is warm off-white `#F4EFE6` (no blue-white backgrounds for now).
- Palette roles: royal `#1F299C` for links and marks on light, cyan `#30D1FF` for marks on dark, periwinkle `#A3A9F5` for hero highlights, orange `#D73D0D` for buttons only, always with **white** text.
- Handwritten script (Mrs Saint Delafield) only as the first word of section titles and the "Seen at" label.
- Fonts: Inter only besides the script. No monospace.
- Photos are standalone pictures: no gradients, fades or overlays on them.
- No blur on or behind text. The hex pattern shows on every section (navy on light, white on dark).
- Keep it simple: no carousels. Never invent testimonials, numbers or client logos.

Still waiting on the client: the book purchase link, LinkedIn URL and email address (marked `data-placeholder` or `[Email Address]` in `index.html`).

## Files not in this repo

`.env*` (Vercel token), `.vercel/` (each person runs `vercel link` themselves), `.backup/` (old versions) and `.impeccable/` (design tool cache) stay local.
