# Teaching Notes

- Alex is the author of this repo (glasscn) — lessons should reference his real files (`components/ui/glasscn/liquid-glass.tsx`), not toy examples.
- Verifies things visually himself in the browser; tight feedback loops with live demos suit him better than long prose.
- Communicates tersely; prefers direct answers. Don't pad lessons.
- Environment: bun, Next 16, macOS, Chromium-family browser primarily (lesson demos using `backdrop-filter: url()` will work for him).
- Good visual judgment — he caught from his own macOS screenshot that Apple's material has no chromatic aberration, against the grain of most web recreations. Trust his eye; bring evidence when disagreeing.
- **Pace correction (2026-06-10):** strong React/TS, but NO SVG filter background. Lessons must introduce one SVG concept at a time, in plain language, with the glossary linked. The first 0001 draft overshot — he said so directly. Prefer "build it up stage by stage" demos over finished artifacts.
