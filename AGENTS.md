# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Static site, no build step and no dependencies: plain HTML5 + one shared `style.css` + one shared `theme.js`. Every page must still work opened directly via `file://`, not just under GitHub Pages.
- `theme.js` also drives any mockup tab switch via `[data-tabs]` / `.tab-btn[data-tab-target]` / `.tab-panel[data-tab]` - reuse that pattern instead of adding new JS for a new tabbed mockup.
- Each project page's inline SVG architecture diagram defines its own `<marker id="arrowhead">` inside that page's `<svg>`; `style.css`'s `.diagram-arrow` rule hardcodes `marker-end: url(#arrowhead)` for every page, so a differently-named marker id silently renders arrows with no arrowhead. Keep the id exactly `arrowhead` in any new diagram, and do not add a `marker-end` attribute on the `<path>` itself (CSS already sets it and would override a differing attribute anyway).
- Case-study pages nest headings as h2 (section) -> h3 (subsection, including a mockup's own heading) -> h4 (a card title inside a mockup, e.g. a fund card). Lighthouse's `heading-order` audit fails on any skipped level - check this when adding a new mockup section.
- Lighthouse cannot audit `file://` pages (`INVALID_URL`); serve the directory over a throwaway local HTTP server (`python3 -m http.server <port>`) and point `chrome-devtools-axi lighthouse` at `http://127.0.0.1:<port>/...`.
- Content rule for this repo: no source code, SQL, schemas, config, internal hostnames, credentials, customer data, or business logic from the real Definedge products may appear anywhere here. "UI recreation" sections are original mockups with clearly fictional data (e.g. `ACME LTD`) labeled "Illustrative recreation with fictional data" - never a screenshot or copy of the real product UI. See `README.md` for the full statement.
- Project facts (problem/role/decisions/outcomes text) must trace back to the resume excerpt used when this site was built; do not invent metrics or URLs (e.g. no LinkedIn URL is listed because the source resume excerpt did not include one).
- Browser automation from this machine: see the fleet-level `chrome-devtools-axi` note in `data/learnings.md` (shared-session gotcha) before running any chrome-devtools-axi command here.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
