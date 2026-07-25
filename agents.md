# AGENTS.md

## Architecture

Static site, no framework, no build step. Three files drive everything:

- `index.html` — cover section, two empty `<section id="letter-body">` / `<section id="letter-body-2">` mount points, a hardcoded photo section, and a closing section. Inline SVG `<defs>` at the bottom define reusable flower sprites referenced via `<use href="#flower-sprig">` / `<use href="#flower-tall">`.
- `styles.css` — all visual design lives here: CSS custom properties for the palette (`--ivory`, `--dusty-rose`, `--sage`, etc.), the `.paper` card look, scroll-reveal transition classes (`.page.is-visible`, `.reveal.is-visible`), and a mobile-first responsive override block at `max-width: 640px`.
- `script.js` — an IIFE with two paragraph arrays (`PART_ONE`, `PART_TWO`) representing the letter split around the photo section. `buildCards()` turns each array-of-paragraph-groups into `.paper.letter-card` elements and injects them into the two mount points. A separate block wires up `IntersectionObserver` for scroll reveals, and another draws slow-drifting petal ellipses on `#petal-canvas`.

## Editing the letter text

Do not hand-edit HTML for the letter body — edit the `PART_ONE` / `PART_TWO` arrays in `script.js`. Each top-level array entry is one paper card; each string inside it is one paragraph. Keep paragraph groups short (2–6 lines) so cards stay readable rather than becoming a wall of text.

## Design constraints (intentional, don't "fix")

- Only two font families are loaded (Cormorant Garamond for display/italic emphasis, Lora for body text) — this is deliberate per the design brief, not an oversight. Do not add more typefaces.
- No dark/black backgrounds and no bouncing/spinning animations — the emotional tone is meant to come from the text, not the visuals. Keep any new animation to fade/slide/opacity only, and respect `prefers-reduced-motion` (already handled globally).
- The photo section (`.photo-page`) is intentionally centered with generous whitespace and never full-bleed/cropped.

## Photo

`assets/mosaic-placeholder.svg` stands in for the real mosaic photo referenced in the letter. Swap it for the actual image and update the `src` + `alt` on `#mosaic-photo` in `index.html` — no other changes needed, the `.photo-mat` frame sizes to whatever image is provided.

## Deployment

Static hosting via Netlify — `netlify.toml` publishes the repo root directly with no build command.
