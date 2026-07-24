Cinematic Farewell Letter

A quiet, responsive farewell website designed as one continuous editorial reading experience. The original letter remains intact and the supplied photo mosaic stays in its intended position within the story.

## Technologies

- HTML5 for the semantic letter structure
- CSS3 for the dark editorial design, responsive layout, and transitions
- Vanilla JavaScript for scroll reveals, reading progress, particles, and the delayed ending
- Netlify static hosting configuration

## Run Locally

No package installation or build step is required. Open `index.html` directly in a browser, or serve the project directory with any static file server.

For Netlify local emulation, run:

```bash
netlify dev --port 8889
```

## Project Structure

- `index.html` — the complete letter and accessible page structure
- `styles.css` — visual system, responsive rules, and animations
- `script.js` — reading interactions and ambient particle canvas
- `assets/you.jpeg` — the supplied photo mosaic
- `netlify.toml` — static publishing and response headers
