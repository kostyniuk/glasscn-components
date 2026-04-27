export type FrostGlassVariant = "clear" | "frosted" | "subtle" | "liquid" | "liquid-bold";
export type FrostGlassVariantProp = { glassVariant?: FrostGlassVariant };

export const glassVariantStyles: Record<FrostGlassVariant, string> = {
  clear: [
    "backdrop-blur-[2px] backdrop-saturate-[1.9]",
    "bg-white/[0.25] dark:bg-black/[0.25]",
    "border border-white/[0.5] dark:border-white/[0.12]",
    "shadow-[0_1px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_12px_rgba(0,0,0,0.2)]",
  ].join(" "),
  frosted: [
    "backdrop-blur-[16px] backdrop-saturate-[1.6]",
    "bg-white/[0.55] dark:bg-black/[0.35]",
    "border border-white/[0.4] dark:border-white/10",
    "shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]",
  ].join(" "),
  subtle: [
    "backdrop-blur-[4px] backdrop-saturate-[1.5]",
    "bg-white/[0.3] dark:bg-white/[0.06]",
    "border border-black/[0.05] dark:border-white/[0.08]",
    "shadow-sm",
  ].join(" "),
  liquid: [
    // 1) Refractive backdrop — lighter than frosted so the background reads
    //    clearly through the lens; saturation + brightness lift makes it bloom.
    "backdrop-blur-[12px] backdrop-saturate-[1.8] backdrop-brightness-[1.05]",
    "dark:backdrop-saturate-[1.6] dark:backdrop-brightness-[0.95]",

    // 2) Base translucent fill (acts as the panel's "tint").
    "bg-white/[0.10] dark:bg-white/[0.04]",

    // 3) Layered radial-gradient sheen + warm bottom tint + vertical wash.
    //    Underscores represent spaces inside Tailwind arbitrary values.
    "[background-image:radial-gradient(120%_85%_at_15%_8%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_38%,rgba(255,255,255,0)_70%),radial-gradient(110%_80%_at_85%_100%,rgba(255,210,230,0.22)_0%,rgba(255,255,255,0)_60%),linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.12)_100%)]",
    "dark:[background-image:radial-gradient(120%_85%_at_15%_8%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_40%,rgba(255,255,255,0)_70%),radial-gradient(110%_80%_at_85%_100%,rgba(120,170,255,0.12)_0%,rgba(0,0,0,0)_60%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.18)_100%)]",
    "[background-size:200%_200%,180%_180%,100%_100%]",
    "[background-repeat:no-repeat]",

    // 4) Multi-layer bevel:
    //    - inset top hairline highlight (light-from-above)
    //    - inset fish-eye glow at the bottom (lensing artifact)
    //    - thin inset side rails
    //    - outer contact shadow + broader halo (panel feels floating)
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),inset_0_-12px_24px_-10px_rgba(255,255,255,0.45),inset_1px_0_0_0_rgba(255,255,255,0.22),inset_-1px_0_0_0_rgba(255,255,255,0.18),0_24px_60px_-18px_rgba(15,23,42,0.30),0_8px_24px_-8px_rgba(15,23,42,0.18)]",
    "dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.30),inset_0_-14px_28px_-10px_rgba(180,210,255,0.18),inset_1px_0_0_0_rgba(255,255,255,0.10),inset_-1px_0_0_0_rgba(255,255,255,0.08),0_28px_70px_-18px_rgba(0,0,0,0.55),0_10px_28px_-10px_rgba(0,0,0,0.40)]",

    // 5) Hairline border for the chamfer's outer edge.
    "border border-white/[0.45] dark:border-white/[0.10]",

    // 6) Slow ambient drift; respects prefers-reduced-motion.
    "animate-[liquid-drift_18s_ease-in-out_infinite] motion-reduce:animate-none",
    "[will-change:background-position]",
  ].join(" "),
  // liquid-bold: pure-CSS, amped-up `liquid`. Heavier saturation & contrast,
  // more pronounced bevel highlights and a glossier sheen.
  "liquid-bold": [
    "backdrop-blur-[10px] backdrop-saturate-[2.2] backdrop-brightness-[1.10] backdrop-contrast-[1.05]",
    "dark:backdrop-saturate-[1.9] dark:backdrop-brightness-[0.95]",

    "bg-white/[0.08] dark:bg-white/[0.03]",

    // Stronger sheen — brighter top-left specular, richer warm bottom tint.
    "[background-image:radial-gradient(120%_90%_at_15%_5%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.24)_42%,rgba(255,255,255,0)_72%),radial-gradient(110%_85%_at_85%_100%,rgba(255,200,225,0.38)_0%,rgba(255,255,255,0)_62%),linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.14)_100%)]",
    "dark:[background-image:radial-gradient(120%_90%_at_15%_5%,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.06)_42%,rgba(255,255,255,0)_72%),radial-gradient(110%_85%_at_85%_100%,rgba(120,170,255,0.20)_0%,rgba(0,0,0,0)_62%),linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(0,0,0,0.22)_100%)]",
    "[background-size:200%_200%,180%_180%,100%_100%]",
    "[background-repeat:no-repeat]",

    // Brighter chamfer + thicker bottom fish-eye glow + thicker side rails.
    "shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.85),inset_0_-16px_30px_-10px_rgba(255,255,255,0.65),inset_2px_0_0_0_rgba(255,255,255,0.32),inset_-2px_0_0_0_rgba(255,255,255,0.26),0_28px_70px_-18px_rgba(15,23,42,0.35),0_10px_28px_-8px_rgba(15,23,42,0.20)]",
    "dark:shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.42),inset_0_-16px_30px_-10px_rgba(180,210,255,0.26),inset_2px_0_0_0_rgba(255,255,255,0.16),inset_-2px_0_0_0_rgba(255,255,255,0.12),0_32px_80px_-18px_rgba(0,0,0,0.60),0_12px_30px_-8px_rgba(0,0,0,0.45)]",

    "border border-white/[0.55] dark:border-white/[0.14]",

    "animate-[liquid-drift_18s_ease-in-out_infinite] motion-reduce:animate-none",
    "[will-change:background-position]",
  ].join(" "),
};
