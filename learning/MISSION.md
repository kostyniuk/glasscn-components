# Mission: Own the optics and browser machinery behind glasscn's LiquidGlass

## Why
Alex is the author of glasscn, a glassmorphism component registry whose flagship primitive (`LiquidGlass`) was just rewritten to match Apple's Liquid Glass material. The rewrite was AI-assisted; the goal now is that Alex can reason about every layer of it himself — tune it, debug rendering reports from registry consumers, and extend it — without treating the displacement pipeline as a black box.

## Success looks like
- Explain from memory how a generated PNG bends backdrop pixels: channel encoding, the 128 neutral point, and what `scale` means in pixels.
- Change the bezel profile or SDF in `components/ui/glasscn/liquid-glass.tsx` and correctly predict the visual result *before* reloading.
- Triage a registry user's bug report ("looks flat in Safari", "ring is a white wash in Firefox") to the right layer: capability gate, displacement map, filter graph, or rim overlay.
- Defend the design decisions to a contributor: why no chromatic aberration, why UA sniffing instead of `CSS.supports`, why canvas-generated maps instead of WebGL.

## Constraints
- Learns hands-on: verifies visually in the browser, in his own repo (bun + Next dev server).
- Short sessions, squeezed around actually maintaining the library.
- Lessons should use the real code from this repo, not toy abstractions.

## Out of scope
- WebGL/shader pipelines (the `@paper-design/shaders-react` components are a deliberately separate technique).
- Physically exact Snell's-law ray tracing (rejected during the build as visually indistinguishable at UI scale).
- General color science / display calibration.
