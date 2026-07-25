# To You, Babi — A Letter

A single-page, static website presenting a long personal letter as a peaceful, watercolor-inspired scrapbook. It was designed to feel like a 3rd monthsary gift first — warm, romantic, handmade — so the emotional weight comes from the words themselves rather than from dark or dramatic visuals.

## What it is

- A cover page, the letter split into readable paper "cards," a centered mosaic-photo page, and a closing page.
- One serif font (Cormorant Garamond) for headings/emphasis and one serif-leaning body font (Lora) for paragraphs — intentionally no extra typefaces.
- Soft watercolor background washes, floating petal particles, and small hand-drawn SVG flower sprigs framing the paper and the photo.
- Gentle scroll-reveal animations (fade + slight upward slide) via `IntersectionObserver`, with a `prefers-reduced-motion` fallback that disables motion entirely.
- Fully responsive, with mobile treated as the primary reading surface (comfortable padding, larger line-height, non-cramped paragraph spacing).

## Tech

Plain HTML, CSS, and vanilla JavaScript only — no frameworks, no build step.

- `index.html` — page structure and the two letter-body mount points
- `styles.css` — the entire visual design (colors, paper cards, flowers, responsive rules)
- `script.js` — renders the letter paragraphs into paper cards, drives scroll reveals, and animates the floating petals on a `<canvas>`
- `assets/mosaic-placeholder.svg` — a placeholder for the real mosaic photo

## Running locally

No install or build required — just serve the folder statically, e.g.:

```bash
npx serve .
```

or open `index.html` directly in a browser.

## Adding the real photo

Replace `assets/mosaic-placeholder.svg` with the actual photo (e.g. `assets/mosaic.jpg`) and update the `src` on `#mosaic-photo` in `index.html`.
