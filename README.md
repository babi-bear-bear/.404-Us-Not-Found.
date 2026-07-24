# Project Guide

## Architecture

This is a dependency-free static Netlify site. The experience is intentionally implemented with plain HTML, CSS, and JavaScript so it can deploy without a compilation step.

## Key Files

- `index.html` contains the complete letter in its original order. Treat the letter copy as immutable.
- `styles.css` contains the full visual system and all responsive behavior.
- `script.js` manages scroll reveals, reading progress, the delayed final message, the return control, and the ambient canvas.
- `assets/you.jpeg` is the story's mosaic image and must remain immediately after the mosaic introduction.
- `netlify.toml` publishes the repository root as the static site.

## Conventions

- Use semantic HTML and preserve the continuous letter format without chapter titles or sections.
- Do not rewrite, remove, reorder, or replace any letter text or imagery.
- Keep styling in `styles.css` and behavior in `script.js`; do not introduce frameworks or build tooling.
- Prefer CSS transforms and opacity for motion.
- Respect `prefers-reduced-motion` for all new animation work.
- Maintain keyboard focus states and meaningful accessible labels.

## Design Decisions

The opening gate controls the start of the reading experience and prevents an abrupt page load. Paragraph reveals use Intersection Observer, while the final apology is intentionally delayed by two seconds after the preceding line enters view. The star field uses a small fixed canvas to avoid adding image dependencies or heavy visual effects.
