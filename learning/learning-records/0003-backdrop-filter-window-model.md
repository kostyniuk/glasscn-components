# Misconception surfaced and corrected: "the glass effect is applied to the component"

After lesson 0001, Alex asked how `backdrop-filter` can produce the visible glass if it filters what's *behind* the element rather than the element itself — revealing the mental model that effects are applied "to the component as displayed." Corrected with the window model: the element's own pixels are nearly transparent; the visible glass is the backdrop snapshot run through the filter and clipped to the element's bounds, with children painted on top unfiltered.

**Implications:** Render-order/compositing intuition is a fresh area — future lessons touching stacking, clipping, `overflow-hidden`, or why children stay crisp should not assume it. The window model section now exists in lesson 0002 (`#window` anchor) to reference instead of re-explaining.

**Evidence:** His question precisely articulated the gap ("do we not apply the effect to the actual component?"); the correction landed well enough that he asked to fold it into the lesson. Full verification pending: he hasn't yet answered the drag-check question — revisit in the next session.
