# Directed the LiquidGlass rebuild; knows the API surface and design decisions, not yet the pipeline internals

Alex directed an AI-assisted rewrite of `LiquidGlass` (2026-06-10): rounded-rect SDF displacement map, Chromium capability gate with frosted fallback, specular rim. He made the key product calls himself — rejected chromatic aberration by comparing against a real macOS 26 Control Center screenshot (correctly, against the common web-recreation pattern), and tuned the fallback blur by eye. He knows the component's props, consumers, and the *what/why* of each decision at a conversational level.

**Implications:** The gap to teach is the *mechanism* layer: how the displacement map encodes vectors, feDisplacementMap/scale semantics, the SDF math, and the filter graph — he should be able to predict visual outcomes from code changes. Start there (lesson 0001), not at "what is glassmorphism" (far below ZPD) and not at Snell's-law derivations (explicitly out of mission scope).

**Evidence:** The chromatic-aberration call ("i dont think apple version uses chromatic abberation") and the fallback-blur tuning feedback ("fallback for non-chrome, blur is too big") — both correct visual judgments made unprompted.
