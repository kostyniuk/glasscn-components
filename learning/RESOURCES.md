# Liquid Glass on the Web — Resources

## Knowledge

- [Article: "Liquid Glass in the Browser: Refraction with CSS and SVG" — kube.io](https://kube.io/blog/liquid-glass-css-svg/)
  The deepest technical treatment: Snell's-law displacement profiles, map encoding (R=X, G=Y, 128 neutral), scale calibration, map-rebuild costs. Use for: anything about *why* the displacement map is built the way it is.
- [Article: "Liquid Glass in CSS (and SVG)" — ekino-france](https://medium.com/ekino-france/liquid-glass-in-css-and-svg-839985fcb88d)
  Survey of the technique with worked examples. Use for: a second opinion on filter-graph structure.
- [Article: "Liquid Glass, but in CSS" — Atlas Pup Labs](https://atlaspuplabs.com/blog/liquid-glass-but-in-css)
  Pragmatic recreation write-up. Use for: comparing trade-offs other implementers made.
- [Docs: `<feDisplacementMap>` — MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap)
  The primitive's exact semantics: `P'(x,y) ← P(x + scale·(XC(x,y)−0.5), y + scale·(YC(x,y)−0.5))`. Use for: any doubt about channel/scale math.
- [Docs: `backdrop-filter` — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
  Property semantics and the backdrop root. Use for: what "the backdrop" actually samples.
- [Bug: WebKit 245510 — `backdrop-filter: url(#filter)` doesn't work with SVG filters](https://bugs.webkit.org/show_bug.cgi?id=245510)
  The reason Safari needs the frosted fallback. Use for: tracking when the capability gate can be loosened.
- [Issue: mdn/browser-compat-data #24110 — SVG filters in backdrop-filter unsupported in Firefox/Safari](https://github.com/mdn/browser-compat-data/issues/24110)
  Confirms the support matrix and that `CSS.supports()` false-positives. Use for: justifying UA sniffing.
- [Docs: "Adopting Liquid Glass" — Apple Developer](https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass)
  Apple's own description of the material (design intent, not implementation). Use for: ground truth on what the effect is *supposed* to look like; settled the no-chromatic-aberration question alongside Alex's own macOS screenshots.
- Local: `plans/001-liquid-glass-apple-parity.md` (this repo)
  The full implementation plan with the decision log — geometry math, gating, rejected alternatives. Use for: the canonical record of how this repo's version works.

## Wisdom (Communities)

- [GitHub: shadcn/ui Discussions](https://github.com/shadcn-ui/ui/discussions)
  Where registry authors compare notes. Use for: feedback on the component's API surface from people who consume registries.
- [r/css](https://reddit.com/r/css)
  Active, reasonably moderated. Use for: posting the effect and getting cross-browser bug reports you didn't anticipate.
- [WebKit Bugzilla](https://bugs.webkit.org)
  Not a forum, but commenting/CCing on bug 245510 is how you'll hear when Safari ships support.

## Gaps

- No authoritative *implementation* spec for Apple's material exists — only design docs and reverse-engineering. Visual comparison against real macOS/iOS 26 (Alex's screenshots) remains the ground truth.
- No good resource yet on SVG filter *performance* characteristics in Chromium compositing (when does backdrop-filter url() fall off the fast path). Worth a search before optimizing further.
