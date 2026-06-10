# SVG filter fundamentals are below the floor — start from zero

Alex reported that lesson 0001 (displacement maps) was above his level: "i'm not really good at svg and cannot grasp everything." He has no working model of SVG filters yet — primitives, the `in`/`result` graph, `SourceGraphic`/`SourceAlpha`, or how CSS references a filter via `url(#id)`. The displacement-map lesson assumed all of that as vocabulary.

**Implications:** The series must build SVG filter literacy first (rewritten 0001), then displacement (0002), and every later lesson should introduce at most one new SVG concept at a time, recapping vocabulary with glossary links. Don't assume knowledge of any `fe*` primitive until a lesson has explicitly taught it and he's passed its quiz.

**Evidence:** Direct statement after reading the original lesson 0001.
