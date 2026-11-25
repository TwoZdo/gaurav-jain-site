---
name: Dr. Gaurav Jain
description: "v19 — Swiss hero (bold name, yellow rule, B&W portrait, hex lattice) + studio-grid sections: Geist Mono tag rows, heavy uppercase Inter, white cards on grained grey, dark footer wordmark."
colors:
  paper: "#FAFAF7"
  paper-light: "#F2F2EC"
  paper-well: "#E8E7DF"
  paper-yellow: "#F5F0DF"
  navy-ink: "#0F1B2D"
  ink-secondary: "#3B4759"
  ink-muted: "#586273"
  hairline: "rgba(15, 27, 45, .18)"
  hairline-soft: "rgba(15, 27, 45, .09)"
  yellow: "#EBB945"
  gold-ink: "#7A5A0C"
  navy-deep: "#0B1626"
  error: "#A3280F"
  on-dark: "#F4F3EE"
  on-dark-secondary: "#B6BFCC"
  white: "#FFFFFF"
typography:
  label:
    fontFamily: "Geist Mono, ui-monospace, Menlo, monospace"
    fontSize: "12.5px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.02em"
  display:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.1rem, 7.6vw, 8.5rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  standfirst:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)"
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  numeral:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(4rem, 8vw, 8rem)"
    fontWeight: 300
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  wordmark:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(4rem, 17.2vw, 16.5rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.05em"
  lede:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.005em"
  label:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
  caption:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
  full: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  gap: "clamp(16px, 2.2vw, 32px)"
  section: "clamp(96px, 13vw, 200px)"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.paper}"
  button-ink:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "56px"
  button-ink-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy-ink}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "56px"
  button-paper-hover:
    backgroundColor: "{colors.white}"
  button-small:
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "42px"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.navy-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 0"
    height: "44px"
  chip-segment:
    backgroundColor: "transparent"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  chip-segment-selected:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.paper}"
  coupon-form:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 3vw, 40px)"
---

# Design System: Dr. Gaurav Jain

## Overview

**Creative North Star: "The Financial Broadsheet"**

The site is still set as a weekend financial paper edited for one author: a front page, market listings, a feature diagram, a programme, a profile, a book page and a back page. In v18 the paper is a clean off-white, all type is navy ink, and yellow is a hint used for actions and a few marks. Structure still comes from the press: double masthead rules, hairline column rules, margin folios and printed grayscale photographs. Nothing floats; content is ruled into columns.

The pattern is the rings: fields of concentric circles that ripple slowly outward from a centre and fade, taken from the user's reference of dark navy cards with concentric arcs. They sit behind the front page, the framework triangle, the book and the invite, never behind running text columns at full strength (each field is masked to fade at its edge). Density follows the broadsheet: very large General Sans headlines with generous section air (up to 200px) above dense ruled lists. Section fields change like newspaper sections (off-white, light paper, navy, deep navy, yellow-tinted paper) instead of cards on one background.

The rejected look is the corporate-blue consultant page with a hero and card grid. Navy here is ink on paper and a full-bleed section field, never a corporate brand blue on buttons and cards. This system replaces the v17 salmon, vermilion, Zodiak, Switzer and JetBrains Mono world; grain and halftone are gone.

**Key Characteristics:**
- Off-white ground, navy ink for all text, yellow only for actions, marks and one ring in four.
- One face: General Sans 300 to 700. Emphasis is a weight drop to 300, never italic.
- Slow rippling ring fields (12 rings, 36s cycle) as the one pattern; static under reduced motion.
- Double rules open the masthead and every section; hairline rules divide columns and rows.
- Square corners on every box; circles belong only to rings, triangle vertices and the invite bullets.
- Photographs are printed grayscale.

## Colors

Navy ink on off-white paper with a hint of yellow, and navy as the full-bleed dark field.

### Primary
- **Signal Yellow** (`yellow`): primary action fields (front-page and mobile-menu buttons), hover fill for ink buttons, the full stop closing the front-page headline, masthead separators, the one filled listing symbol, the framework core and active vertex, the active framework question and pull-quote mark on navy, the invite bullets, the underline under the closer's emphasis, contact link underlines, and every fourth ring. Navy text on it, never white.
- **Gold Ink** (`gold-ink`): yellow when it has to be read as text on light paper: text-link and margin-note hover, margin-note numbers, the listing numeral on hover.

### Neutral
- **Paper** (`paper`): the default ground (front page, talks, sticky bar, coupon form); text colour on navy buttons.
- **Light Paper** (`paper-light`): quiet sections (listings, profile).
- **Paper Well** (`paper-well`): segment-chip hover and photo placeholder.
- **Yellow Paper** (`paper-yellow`): the invite section field only; the one place the ground itself carries the yellow hint.
- **Navy Ink** (`navy-ink`): all text, rules, ink buttons, and the full-bleed framework and footer fields.
- **Ink Secondary** (`ink-secondary`): secondary copy, ledes, list items, the masthead strip.
- **Ink Muted** (`ink-muted`): captions, labels and the third, lightest line of stepped headlines.
- **Hairline / Hairline Soft** (`hairline`, `hairline-soft`): column and row rules; soft for rows inside a listing.
- **Deep Navy** (`navy-deep`): the book section field only.
- **On Dark / On Dark Secondary** (`on-dark`, `on-dark-secondary`): primary and secondary text, labels and triangle edges on the navy fields.
- **Error** (`error`): form error underline and status text only.
- **White** (`white`): paper-button hover on the book field only.

### Named Rules
**The Hint Of Yellow Rule.** Yellow is a hint: actions, small marks, and one ring in four. It never sets body text, never fills a section edge to edge (the invite gets yellow-tinted paper, not yellow), and is read as text on light paper only through `gold-ink`.

**The Navy Ink Rule.** Every piece of text on a light field is navy or its tints (`ink-secondary`, `ink-muted`). Navy as a colour field is a full-bleed section (framework, book, footer), never a card or a branded button block on paper.

**The Section Field Rule.** Sections change ground the way a paper changes sections: paper, light paper, navy, deep navy, yellow paper. A section is one field edge to edge; never a coloured card on a different ground.

## Typography

**Display Font:** General Sans (with Helvetica Neue, Arial, sans-serif); weights 300, 400, 500, 600, 700, no italic loaded
**Body Font:** General Sans (same stack)

**Character:** One grotesque doing every job, with hierarchy carried by size, weight and tracking: tight 500 headlines that drop to 300 for the turn, 400 text, and small tracked uppercase 500 for the apparatus.

### Hierarchy
- **Display** (`display`): the three-line front-page headline only; lines step in from the left margin, the middle line at 300.
- **Headline** (`headline`): section headings, max 16ch, balanced. The emphasised phrase drops to its own line at 300.
- **Title** (`title`): listing desks and column heads. Session titles run larger (500, clamp(2rem, 3.6vw, 3.5rem)).
- **Standfirst** (`standfirst`): 300 under the front-page rule; the same light voice sets session subtitles, the book subtitle, the pull quote and the book quote.
- **Numeral** (`numeral`): programme numbers, outlined. Folio and listing numerals use 300 at smaller clamps.
- **Lede** (`lede`) and **Body** (`body`): ledes max 46ch, body columns 44 to 52ch.
- **Label** (`label`): uppercase, tracked 0.06 to 0.08em: masthead strip, folio words, fact terms, form labels, list titles, attributions.
- **Caption** (`caption`): sentence case under photographs and in the footer row.
- **Wordmark** (`wordmark`): the footer's full-width "Gaurav Jain", one line, bleeding to the edges.

### Named Rules
**The Weight Turn Rule.** Emphasis in a headline is the same General Sans dropped from 500 to 300, set on its own line or as the final phrase; colour may follow (`ink-muted`, `on-dark-secondary`) but never replaces the weight change. Never italic (no italic is loaded, so a slant would be faked), never bold.

**The One Face Rule.** General Sans is the only face. Labels, folios, captions and data are General Sans uppercase or small sizes, not a mono; display is General Sans, not a serif.

## Layout

A 12-column grid inside a 1480px measure with fluid gutters (`gutter`) and column gaps (`gap`). Sections breathe with `section` padding top and bottom.

Every section head is a 12-column row opened by a 3px double navy rule: the folio sits in a margin column (columns 1 to 3) and the heading and lede in columns 4 to 12. Book and invite place the folio as a row above the content, under its own double rule.

Column rules are visible structure: hairline left rules divide listing desks, format columns and the front-page text block; the front-page copy runs in two CSS columns with a hairline column rule. Rows are divided by hairlines (`hairline`, or `hairline-soft` inside a listing), with a full navy rule at the top of each table.

The masthead is an uppercase strip (roles and a live New York date) that scrolls away above a sticky bar with a 1px navy rule over it and a 3px double navy rule under it.

Listings are a four-desk board using `grid-template-rows: subgrid` (each desk spans three rows) so numerals, titles and lists align across desks.

Ring fields are absolutely positioned behind content (z-index -1 inside an isolated section): front page centred at 84% / 46% (up to 1200px), framework centred on the triangle (150% of the figure), book at 24% / 50% behind the cover, invite at 80% / 60%. On mobile the fields grow to 160 to 170vw and recentre.

Responsive: at 1080px the board becomes two desks and columns re-span; at 860px the nav collapses to a Menu button that opens a full-width list of 28px links; at 720px everything stacks to one column, margin notes hide, and folio words in section heads hide.

## Elevation & Depth

The system is flat, printed paper. Depth comes from section fields, rules and the ring fields, not shadows or textures.

- **Rings:** each `[data-rings]` field holds 12 concentric 1px circles (`hairline`-weight navy at 14% on light fields, on-dark at 14% on navy), every fourth in yellow (70% on light, 55% on navy). The field is masked to a radial fade (solid to 62%, gone at the edge).
- **Printed photographs:** grayscale, contrast 1.05.

### Shadow Vocabulary
- **Cover plate** (`box-shadow: 0 22px 40px -22px rgba(0, 0, 0, .6)`; hover `0 32px 52px -24px rgba(0, 0, 0, .65)` with a 6px lift): the book cover only, as an object resting on the deep navy field.

### Named Rules
**The Printed Page Rule.** No surface floats. The only shadow is the one under the physical book cover; the coupon form, buttons and listings stay flat.

**The Slow Ripple Rule.** Rings move only outward, linearly, over 36s, each ring 3s behind the last, fading in by 12% of its life and out by the end. Nothing faster, no rotation, no pointer tracking. Under reduced motion the rings hold still at their stepped scales.

## Shapes

Square corners on every box (`rounded.none`): buttons, inputs, chips, photos, the coupon. Form language is lines, not boxes: 3px double rules open sections, 1px navy rules head tables, hairlines divide rows and columns. Circles (`rounded.full`) appear only where the world draws them: the ring fields, triangle vertices and core, and the 10px yellow bullets of the invite list. The inquiry form is cut out as a coupon with a 1px dashed navy outline (35%) offset 10px.

## Components

### Buttons
Solid, square, confident.
- **Shape:** square corners (0), 56px tall, 26px side padding; small variant 42px and 18px.
- **Primary (yellow):** the front-page action and mobile-menu invite; navy text; hovers to navy with paper text.
- **Ink:** secondary actions (bar CTA, workshop CTA, form submit); hovers to yellow with navy text.
- **Paper:** on the deep navy book field; hovers to white.
- **Arrow:** a 20px stroked arrow that slides 4px right on hover. Focus: 2px navy outline offset 3px; paper outline on navy fields.
- **Text link:** 600 with a 1px current-colour underline rule and arrow; hovers to gold ink.

### Chips (segment control)
- **Style:** 1px navy border, square, 40px tall, 500 14px; hover fills paper well.
- **State:** selected fills navy with paper text.

### Inputs / Fields
- **Style:** transparent, underline only (1px navy), square, 44px minimum; uppercase label above.
- **Focus:** the underline thickens to 2px navy.
- **Error:** 2px error underline; status text in error, weight 500.

### Navigation
500 15px links in the sticky bar; a 1px underline draws in from the left on hover and for the current section. Brand is 700. Below 860px a "Menu" button with a two-line icon opens a full-width paper panel of 28px links and the yellow invite button.

### Section Folio
A margin-column folio: a 300 numeral (02 to 07) over an uppercase section word. The word never sits as a line above a heading: it is hidden where the folio stacks above content (book, invite, mobile section heads).

### Listings Board
Four desks, each with a numeral, a 40px stroked line symbol (one yellow fill allowed), a title and a ruled list. Subgrid rows; hairline column rules; the numeral turns gold ink on hover.

### Framework Triangle
The Product–Customer–Market triangle on the navy field, over its own ring field: three arrowed edges that draw on entry (1.4s, staggered 0.25s), a yellow core, and numbered vertices. Selecting a vertex, a question, or a front-page margin note fills that vertex yellow, brightens its edge, and brings its question set forward (inactive sets drop to 68% opacity; the active question turns yellow).

### Ring Field
The signature pattern. An empty `[data-rings]` element that the script fills with 12 rings; CSS scales them from 6% to full size while fading, so the field breathes outward from its centre. Light variant on paper fields, `--dark` variant on navy fields. Always decorative and behind content.

### Programme Rows
Ruled session rows on the 12-column grid: an outlined 300 numeral (1px navy text stroke, transparent fill) in columns 1 to 2, title and 300 subtitle in 3 to 8, copy and "Discuss this session" link in 9 to 12. Hover or focus fills the numeral yellow.

### Book Plate
The real cover as a plate on the deep navy field, ring field behind it, caption below, title set huge at 500 with a 300 indented second line.

### Coupon Form
Paper panel on the yellow-paper invite field, dashed navy outline offset 10px, headed by 28px type over a double navy rule. Underline fields, segment chips, full-width ink submit.

### Footer Wordmark
On the navy field, "Gaurav Jain" at 500 up to 16.5rem (17.2vw), one line, -0.05em tracking, over a caption row.

## Do's and Don'ts

### Do:
- **Do** open every section with a 3px double rule and a margin-column folio.
- **Do** divide columns and rows with hairlines (`hairline`, `hairline-soft`) and head tables with a 1px navy rule.
- **Do** set headline emphasis as a drop from 500 to 300 on its own line.
- **Do** put navy text on yellow, and use `gold-ink` whenever yellow must be read as text on paper.
- **Do** keep ring motion at the 36s outward ripple and hold it still under reduced motion.
- **Do** keep every box corner square.

### Don't:
- **Don't** put content in cards, rounded panels, or floating shadowed boxes; the only shadow belongs to the book cover.
- **Don't** use corporate blue or a hero-plus-card-grid layout; navy is ink and section field, not a brand-blue button system.
- **Don't** load or fake an italic, or add a serif or mono face.
- **Don't** let a folio word or uppercase label sit as a line above a heading.
- **Don't** use yellow for body text, large fills, or more than one ring in four.
- **Don't** bring back grain or halftone textures.


## v20 cohesion rules (2026-11-19)

- One ground: white hero (the cover, closed by a hairline), then a single grained grey (#EEEEEB) for every section. Sections are separated by the mono tag row and its rule, never by background changes.
- One dark surface: flat navy ink (#0F1B2D) with the hex lattice, used for the closer panel, the framework stage, and the book stage. The footer uses navy-deep with a soft navy glow.
- One rhythm: `--sec` between sections, `--gap` (10px) between every card. Cards are white with a 6px radius and no shadow; buttons are square; choice chips (framework tabs, form options) are pills, ink-filled when selected.
- One type scale: hero name 800 uppercase; section H2 700 uppercase (max ~4.4rem); every lead/standfirst uses `--t-lead` (500); card titles 600. Greyed-out words appear only in section intro notes and the pull quote.
- Motion: one hero load sequence and the slow hex drift. No scroll reveals or hover lifts.

## v21 (2026-11-19)

- Header floats: a white 6px-radius pill fixed 12px from the top, shadowed once scrolled.
- Hero fills one screen (100svh) on the shared grey ground. It ends in a card row: standfirst, two copy cards with line icons, and a yellow CTA card. Phones scroll normally.
- Rotating word (`[data-dial]`, site.js): every 2.6s the next word rises in from below while the current one lifts out with a fade and slight blur (the 3D drum was rejected), only while on screen. It is used for "Different products / customers / markets" (closer panel) and for the three talk formats. With reduced motion it shows the static text instead.
- About facts: a yellow card with line icons and a New York skyline line drawing. The research/advisory card gets matching icons.
- Book: a CSS 3D object built from the front, spine and back scans, spun by site.js once every 16s. Dragging (or the arrow keys) turns it, a flick coasts, and the spin resumes 1.5s after release. With reduced motion it does not spin but can still be turned.

- Section titles (the middle "//…" label in each tag row) sit on a yellow highlight.
- Footer: solid navy-deep with no glow. The signature appears in yellow, centred under the wordmark (the ink scan is used as a CSS mask filled with --yellow).
- Product cards (v23): each opens with a line-art illustration on a #F4F4F1 panel (ink 1.6px strokes, yellow accents, white fills). Banking shows a coin dropping onto a stack beside a bank. Investments shows a chart line drawing itself with a pulsing end dot. Insurance shows a shield whose check draws in, with orbiting dots. Fintech shows a phone with network lines flowing in and contactless waves. They animate only while on screen (`[data-live]` + `.is-live`), and with reduced motion they show the finished state.
- Product cards (v24, replacing v23): the stock category pictures (bank, rising chart, shield, phone) were rejected as AI-looking. Each listed product now has its own 36px line icon on a #F4F4F1 tile: vault, house + key, card, allocation pie, advisor + speech bubble, stacked blocks, heart + cross, calendar + coin, umbrella, wallet, phone + transfer arrow, screen with app grid. A yellow detail marks the specific thing. The icons draw in once when the card first arrives, then stay still; nothing loops. No rising-chart imagery anywhere.
- Product cards (v25, replacing v24): one icon per card in a 72px tile (the per-item icons were too busy). The icons are a vault, an allocation pie, a shield (v26: half yellow, its check draws in) and a wallet. Each has one slow idle motion that belongs to the object: the dial turns like a combination lock, one holding eases out of the pie, the shield's check draws in, holds and resets, a card slides out of the wallet. They play only while on screen, and with reduced motion they hold still.
- Product cards (v27, replacing v25/26 icons, which were too plain): a detailed still life per card, built from that card's own products, on a #F4F4F1 panel. All four share one print style: navy line, yellow/white/navy fills, and hatched shadows offset down-right (`#hatch` pattern).
  - Banking: open passbook with a stamped entry, a credit card and a house key on a ring; the key swings.
  - Investments: portfolio statement with a highlighted holding, an allocation pie and a pen; the yellow holding eases out of the pie.
  - Insurance: a policy document (home and heart glyphs, signature, rosette seal) and a half-yellow shield; its check draws in.
  - Fintech: a receipt, a phone banking screen and a card; the card taps the phone.
  - One motion each, only while on screen, none with reduced motion.
- v28: the user went back to the v26 one-icon-per-card set (vault, pie, shield, wallet). The v27 still lifes are saved in .backup/index-v27.html and styles-v27.css.
- v29: the About skyline is now recognisably New York: Statue of Liberty, One World Trade Center, the Empire State Building, the Chrysler crown and a Brooklyn Bridge tower with cables.
- CTAs (v29): every button has an icon that matches its action. Invite has a microphone, Discuss a workshop a speech bubble, Explore the book a book, See the sessions a down arrow, and the form submit a send arrow. On hover the opposite colour sweeps in from the left (yellow buttons turn navy with yellow text, navy buttons turn yellow); leading icons tilt and trailing arrows nudge in their direction. Keyboard focus shows the same state. The hero CTA card fills navy from the bottom while its arrow tile flips to yellow and turns. Text links grow their yellow underline into a full highlight.
- Framework (v30): the template mock card (lens columns, triangle, barcode bars) is replaced by a three-lens diagram on the navy stage. Three overlapping circles (product, customer, market); each pair meets in a named idea taken from the site copy (perceived value, differentiation, adoption), and all three meet in success. The selected lens fills yellow with a slowly marching dashed outline, the two ideas it touches light up, and the centre pulses. Clicking a circle selects that lens. Each lens panel ends with two 'With the …' notes naming those meeting points. On phones the diagram sits above the text.
- Framework (v31): the three lens panels form a carousel that slides sideways and moves on by itself every 7s. A yellow progress line fills under the active tab, and the card shows a 01 / 03 counter with previous and next buttons. It pauses while the mouse is over the section, while focus is inside it, or while it is off screen; with reduced motion it does not auto-advance. The diagram is separate from the slides, stays in place and highlights the current lens. Clicking a circle jumps to that lens.
- Header (v32): the brand reads 'Dr. Gaurav Jain' (bold sans), then a thin divider and one mono role word that cycles Professor → Author → Advisor with the same rise-and-fade as the other rotating words. The role word is hidden below 420px.
- Motion system (v33): one set of reveals for the whole page, each playing once, using transform/opacity (plus clip-path on photos). Easing `--out: cubic-bezier(.16,1,.3,1)`.
  - Hero load: the name rises from a mask, the yellow rule draws left to right, the portrait unveils from the bottom, then the three-line headline types itself (30ms/char, a pause between lines, yellow caret), and the hero cards rise in a 90ms stagger.
  - Sections: the yellow "//" label types in; the H2 rises word by word from a mask (45ms stagger); the intro note fades up with a blur clearing; cards, tabs, the framework card and stage, the book and invite blocks rise in a stagger; photos unveil from the bottom with a slow scale settle. The pull quote fades in word by word; the footer wordmark rises letter by letter and the signature follows.
  - The hex lattice is now a fixed layer behind the whole page (`.bg-hex`), masked to the viewport's top-right and bottom-left corners, so it stays in place while content scrolls over it.
  - Reduced motion: none of this runs (`.rv` is never added), so everything is simply visible.
- Hero (v34, portrait-led split): the B&W portrait fills the left ~31% at full height as a 6px-radius card with a 'With Money, Marketed' chip. On the right sit the name, the yellow rule, the typed three-line headline and a 2x2 card grid (standfirst + yellow CTA on top, the two copy cards below). It still fits one screen at 1440x900 and 1280x720. On phones the order is name, rule, portrait, headline, then the cards stacked.

## v35 — Banded layout (after shadezahrai.com)
- Page rhythm changed from one grey card grid to alternating full-bleed bands: navy photo hero → white credentials strip → navy book → photo "Why" (about) → paper products → navy framework → photo "Speaking" → paper sessions + invite card → footer.
- Photo bands: the image sits on the right 60% and fades out to the left through a CSS mask on the img itself (no colour overlay, so no seam on any ground). Below 960px the photo stacks on top and fades downward.
- Hero: Nasdaq stage photo, two-tone headline (yellow line + white line, still typed in), lead with yellow key phrases, intro in his voice, glass card with mic icon and the invite CTA.
- Every section heading opens with one handwritten accent word in Mrs Saint Delafield (the family of his signature): Read, Why, From, Beyond, Signature, Invite. Yellow on dark, #B98A1E on light. It writes in left-to-right via clip-path.
- Headings are now mixed case (no uppercase); mono tag rows removed.
- Credentials strip uses only facts we have (RPI, NYU Stern lecture, Nasdaq MarketSite; tenured / 4 markets / 3 sessions). No invented logos or audience numbers.
- Backup of v34: .backup/*-v34.*

## v36 — "Ivory ledger" palette + more handwritten accents
- Palette: sapphire navy #0D1E36 (ink), deep #08152A, navy-hi #1D3A63, antique gold #CFA555 (the `--yellow` token, renamed in meaning only), ivory paper #F3EFE6, warm card white #FFFDF8, tint #F7F3EA, oxblood #7A2E22 (from the logo) used only for handwritten words on light grounds. Rationale: trust (navy), money/gilt (gold), academic page (ivory).
- Handwritten accents added: hero name above the headline ("Dr. Gaurav Jain" + mono roles), "keynotes & workshops" over Speaking, the pull-quote signature, "Common ground" in the closer, "Get in touch" in the footer. Script apostrophes render poorly in Mrs Saint Delafield, so avoid them.
- Photo bands start in --deep so they meet navy bands without a seam.
- Backup of v35: .backup/*-v35.*

## v37 — "Graphite & royal" palette (replaces the navy/gold theme)
- The user asked for a professional palette and to drop navy/gold. Now graphite #13171D (text and dark bands), deep #0C0F14, light grey ground #F4F5F7, white cards, tint #F1F3F6.
- One accent only: royal blue #2B54D9 (`--accent`) for buttons, selected tabs and links, with white text on it. Accent marks (`--yellow`, historic name) are royal on light grounds and lift to #8DB2FF on dark bands, the footer and ink cards; white cards inside dark bands get royal back.
- Handwriting is fountain-pen blue #2346B5 on light grounds (`--oxblood` token, historic name) and light blue on dark.
- Filled buttons sweep to graphite on light grounds and to white (ink text) on dark bands.
- Backup of v36: .backup/*-v36.*
- v37b: the user asked to keep cursive only in section titles. Script now appears only as the first word of the six h2s (Read, Why, From, Beyond, Signature, Invite). Hero name, speaking kicker, quote signature, closer and footer went back to plain/mono text. The signature images (about band, footer) stay.

## v38 — Framework simplified
- The user asked for "one simple website": the framework tabs, auto-advancing carousel, prev/next controls and interactive Venn diagram are gone. Now three static white cards (01 The product / 02 The customer / 03 The market), each with its heading and question list, then the pull quote. Carousel JS and CSS were deleted, not hidden.
- Backup of v37: .backup/*-v37.*

## v38b — Credential logos
- "Seen at" is handwritten again (user request), followed by real logos instead of names: assets/logos/rpi.svg (Wikimedia Commons, "Rensselaer Polytechnic Institute Logo black.svg"), nyu-stern.png (en.wikipedia "NYU Stern School of Business Logo.png", 810x112), nasdaq.png (Commons "Nasdaq blue black transparent backgr.png"). Shown in one grey tone (grayscale, 70% opacity), full colour on hover. Heights tuned per logo so they read the same size.

## v38c — No monospace
- The user asked for no mono font. Geist Mono is removed from the font request and the CSS. Small uppercase labels (.mono class, book subtitle, form labels) are now Inter 600, 12px, letter-spacing .08em. Fonts on the site: Inter + Mrs Saint Delafield (title accents only).

## v39 — Anti-slop pass
Removed (each failed the removal test; meaning survived and clarity improved):
- Typed hero headline + blinking caret (fake cursor on non-editable copy; blank first frame). Headline now rises word by word like other headings. Typewriter JS and caret CSS deleted.
- Hero glass card (glass with no real layer behind it, mic icon duplicating the button's, copy duplicating Speaking). Replaced by one primary button + a "See talks & workshops" text link.
- Credentials metrics "Tenured / 4 / 3" (filler numbers dressed as proof). Logo strip stays.
- "01/02/03" labels on sessions; "01 ·" prefixes on framework labels (no real sequence).
- Blur on every rise reveal (now fade + 20px rise only).
Kept on purpose (user-requested): hex lattice, product icon tiles, rotating word dials, 3D book, NY skyline, header role fade.
Still open (needs client data): book link, LinkedIn, email address placeholders.
Backup before this pass: .backup/*-v38c.*

## v39b — Blur fix
- Bug from v39: the bulk edit that removed blur from reveals also deleted `filter: none` from `.face.is-on`, so every visible rotating word (header role, "Different …", "Available as …") sat at blur(4px). Rotating words now use slide + fade only; no filter at all.
- Floating header is solid white (no frosted backdrop), so page text scrolling under it never shows blurred.
- Rule: no blur on or behind text anywhere on the site (no filter: blur, no backdrop-filter).

## v40 — Strict dark/light alternation, photos as clean pictures
- Order: hero D, logos L(white), book D, about L, products D, framework L, speaking + signature sessions D (merged into one section), invite L, footer D. Dark sections are one flat graphite (no radial gradient).
- All photos (hero, about, speaking) sit in a two-column .split layout as their own pictures: hard edges, radius var(--r), no fade masks, no overlays, no colour filters. On phones the photo stacks as a 4:3 image.
- Ink card inside a dark section is lifted to #1D232D with a faint inset line.
- Backup: .backup/*-v39b.*

## v41 — Client palette
- Supplied palette: #1F299C royal, #F25929 orange, #787CA9 slate, #E0EAF8 pale, #16215B deep navy, #0373FF electric, #30D1FF cyan, #A3A9F5 periwinkle.
- Roles: deep navy = dark sections + body text; pale = light sections; white cards; royal = marks, links, icon fills, script words on light grounds and the "Different products" block inside the dark products section; orange = calls to action only (label #111A4C, 4.9:1; never white on orange, 3.4:1); cyan = marks and script on dark; periwinkle = hero highlight words; slate darkened to #5F6496 for muted text. Footer #111A4C.
- Every text pairing checked in the browser at AA. Fixed: session-card links were near-invisible since v40 (dark-section link colour leaked into white cards).
- Backup: .backup/*-v40.*

## v42 — White on orange, adaptive pattern everywhere
- Buttons: white label on #D73D0D (palette orange #F25929 deepened in the same hue; 4.6:1 AA). Never dark text on orange (user rule).
- Hex lattice is now a background on body, .cred, .band--navy and .foot: one SVG tile in navy (light grounds) and one in white (dark grounds), both attached `fixed`, so the lattice keeps its position across section edges and only switches colour. A soft centre wash keeps the reading area clear. Old fixed overlay (.bg-hex) and the book section corner lattice removed. iOS Safari ignores fixed backgrounds, so there it scrolls with each section (still visible).
- Backup: .backup/*-v41.*

## v43 — Warm light grounds
- The user asked for no blue-white backgrounds "for now": light sections #F4EFE6 (warm off-white/beige), cards, header and logo strip #FFFCF7, chips/icon tiles/form panel #F8F3EA. The palette pale #E0EAF8 is unused for now. All text pairings re-checked (navy 13–14.6:1, muted 4.9–5.5:1, royal 9.9–11:1).
- Backup: .backup/*-v42.*

## v44 — Visible keyboard focus on dark sections
- The global focus ring was navy, so it was invisible on the navy sections and the footer (and the book's royal ring was near-invisible on navy). Dark grounds now use cyan (#30D1FF, about 9:1 on navy); white cards inside dark sections keep the navy ring. No new colours.

## v45 — Faster header role word
- The Professor / Author / Advisor word in the header now changes every 1.5s (was 2.6s), with a quicker slide (0.35–0.4s). The other two rotating words keep their pace. Still off with reduced motion.

## v46 — Client changes: menu, green "Schedule a Call", hero photo fade
- Menu is now About · Advisory · Speaking · The Book. Advisory links to the products/expertise section (#products) for now.
- The header and hero calls to action are bright green `--green` #2BD46B with navy text (about 7.5:1; white on this green fails contrast) and say "Schedule a Call". They still go to the inquiry form. Other buttons stay orange.
- The hero photo now fades into the navy on all four sides instead of ending at hard edges. This is the client's explicit exception to the "no fades on photos" rule, and applies to the hero photo only.

## v47 — New hero text, quote strip, still book
- Hero text is now the client's wording: "The Marketing of Financial Products." / "Positioning. Communications. Growth." (periwinkle) / the advisory paragraph / a small credentials line (RPI · Money, Marketed · Advisor to Financial-Services Firms).
- The light strip under the hero now holds Dr. Jain's quote ("A great financial product is only half the story…") instead of the "Seen at" logos. Still a light section, so the dark/light alternation holds.
- The book no longer spins or turns on drag; it holds its three-quarter angle. The spin code in site.js is kept but inactive (it only runs if the scene has `data-book`).

## v48 — Book button goes to Amazon
- "Explore the Book" is now bright green like "Schedule a Call" and opens the book's Amazon page in a new tab. That placeholder is resolved; the LinkedIn link and email are still placeholders.

## v49 — "Who I Work With" replaces the About copy
- The light section after the book (`#about`) now shows the client's "Who I Work With" content: four sector cards (Asset & Wealth Management, Fintech & Financial Platforms, Banking & Insurance, Private Capital & Advisory) in a 2×2 grid, and a green "Explore Synergies" button to the inquiry form.
- The NYU Stern lecture photo sits on the right and fades into the off-white ground, like the hero photo (new reusable class `photo-melt`). On phones the cards come first, then the photo.
- The previous About copy (bio, facts, signature, portrait with the book) was removed; `assets/portrait-book.webp` is kept.

## v50 — Products and Framework sections removed
- Removed the "From Everyday Banking to Sophisticated Investments" products section (with the "Different products. Different customers." card) and the "Beyond the Product: Three Questions That Matter" framework section, at the client's request.
- The dark/light alternation still holds: who I work with (light) → speaking (dark) → invite (light).
- "Who I Work With" now has the id `#advisory`; the menu's Advisory link goes there, and About goes to the top of the page (the hero carries the bio line now). The footer links follow the same mapping. Their CSS and site.js code is left in place, unused.

## v51 — Speaking section: client copy, portrait with the book
- Speaking now uses the client's text: the lead "Fresh perspectives on marketing, positioning, and growth in financial services.", two paragraphs, and a static "Available formats" line (Keynotes · Executive Workshops · Guest Lectures · Leadership Sessions). The rotating formats dial is gone.
- The button is green "Invite Dr. Jain to Speak" (was orange "Discuss a Workshop").
- The photo is now the portrait with the book (`portrait-book.webp`), so the NYU Stern lecture photo appears only once, in "Who I Work With". Hard edges, as before.

## v52 — Second quote, new session titles
- A second quote from the client ("In financial services, the challenge is rarely just creating value…") sits at the foot of "Who I Work With", just before Speaking, in the same style as the first quote. It replaces the quote that was in the removed Framework section. It stays inside the light section so the dark/light alternation holds.
- Signature Sessions now use the client's titles: Money, Marketed · Beyond Performance · The Trust Equation, each with its subtitle. The old one-line descriptions were dropped because they described the previous sessions.

## v53 — Industry Advisory section with firm logos
- New section after Speaking: "Industry Advisory", the client's copy on the left and the ten firms Dr. Jain has advised on the right (Sortis Capital, Sarda Capital, Lancaster, Days Global Advisors, AdvisorHub, Yieldstreet, AKRU, Energia, Alternative Advisers, Cartera) as tiles in two columns (three on tablets).
- Warm white ground (like the quote strip), so it reads as a light band between dark Speaking and the off-white invite.
- The logos were cut from the client's screenshot (about 120px wide each) with the white background made transparent. They're shown at about their native size; swap in the originals when available.
- The menu's Advisory link now goes here (`#advisory`); "Who I Work With" moved to `#who`.

## v54 — Simple footer, new menu, "and many more"
- Footer replaced with one simple row on navy: name and "Professor · Author · Advisor" on the left; Contact (mailto jain@yellowfryum.com), LinkedIn (new tab) and Speaking in the middle; "© 2026 Gaurav Jain" on the right. On phones it stacks. The big "GAURAV JAIN" wordmark, signature and link columns are gone. The email and LinkedIn placeholders are resolved.
- Menu is now The Book · Who I Work With · Speaking · Advisory, plus the green "Schedule a Call" button to the form.
- "and many more" under the firm logos.

## v55 — "Bring Dr. Jain to Your Organization" and the "Get in Touch" form
- The invite section uses the client's copy: heading (script "Bring"), a bold lead, an intro paragraph, "His sessions are designed for:" with four audiences (bold name — what they get), and a closing line.
- The form is now "Get in Touch": Name and Email (required), Organization (optional), "I'm interested in" as a vertical list of five round radio options (Speaking or keynote, Executive workshop, Advisory or consulting, Research collaboration, Other; none preselected), and an optional Message. The button is green "Send Message". "Discuss this session" links still pre-fill the message and now also tick "Speaking or keynote".
- The form still has no backend: it validates and shows a thank-you, but nothing is sent yet.
- Menu: "Book" renamed "The Book".

## v56 — Script "Marketing" in the hero, Speaking photo melts, "Let's Connect"
- Hero headline: "The *Marketing* of Financial Products." with "Marketing" in the handwritten script (cyan on navy), like the script word in each section title.
- The "See talks & workshops" link under the hero button is removed.
- The Speaking photo (portrait with the book) now fades into the navy at its edges (`photo-melt`).
- The form button says "Let’s Connect" (green).

## v57 — Navy quote between Advisory and the invite; "Speaking Engagements"
- A short navy quote strip ("Not every financial professional needs to market a product…") now separates Industry Advisory (warm white) and the invite (off-white), so the dark/light alternation holds all the way down.
- The Speaking heading is now "*Speaking* Engagements" with "Speaking" in script, at the normal section-title size (the extra-large size made it wrap badly).
- On phones, titles with a script word get more line spacing so the script doesn't run into the line below.

## v58 — Research & Academic Contributions
- New navy section "*Research* & Academic Contributions" (`#research`) as the last section before the form. The client's three paragraphs on the left, with the Investor Behavior Lab at RPI and The Washington Post in bold; on the right three outlined fact tiles drawn only from that text (Investor Behavior Lab, peer-reviewed research, in the media).
- The green "Explore Academic Research & Publications →" button opens Dr. Jain's LinkedIn in a new tab.
- The navy quote strip from v57 is gone: its quote ("Not every financial professional…") now sits at the foot of Industry Advisory in the same style as the other quotes, and Research takes over as the dark band between Advisory and the invite.
- Menu: Research added (The Book · Who I Work With · Speaking · Advisory · Research). Between 961 and 1180px the role word next to the name is hidden and the spacing tightens so all five links fit; previously the first link was hidden there.

## v59 — Header role word twice as fast
- Professor / Author / Advisor in the header now changes every 0.75s (was 1.5s), with a 0.18–0.2s slide (was 0.35–0.4s). Still off with reduced motion; hidden below 1180px.

## v60 (reverted) — Mr Dafoe tried and dropped
- The script font was switched to Mr Dafoe for a preview, and the client preferred Mrs Saint Delafield. Back to Mrs Saint Delafield at the original size and tilt.

## v61 — The contact form sends email (Vercel + Resend)
- New `api/contact.js` (Vercel serverless function) receives the form and emails it to jain@yellowfryum.com through Resend, with the visitor's email as reply-to and the subject "Website inquiry from <name> (<interest>)".
- Needs `RESEND_API_KEY` set in the Vercel project's environment variables. Until then, and if sending ever fails, the form says so and points to jain@yellowfryum.com instead of pretending it worked.
- A hidden spam-trap field (`website`) silently drops bot submissions. The button shows "Sending…" while it works.

## v62 — Form submissions also go to a Google Sheet
- `api/contact.js` now also posts each submission to a Google Apps Script web app (`tools/google-sheet-script.gs`), which appends a row to a "Submissions" tab: Date, Name, Email, Organization, Interested in, Message, and an empty "Status / notes" column for follow-up.
- Turned on by `SHEET_URL` and `SHEET_TOKEN` in Vercel; the script rejects posts without the matching token, and stops text from being treated as a spreadsheet formula.
- Email and sheet run side by side: the visitor sees "sent" if either worked, and the error with the email address only if both failed or neither is set up.
