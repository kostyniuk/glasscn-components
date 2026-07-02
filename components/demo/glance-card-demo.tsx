import { GlassCard } from "@/components/ui/glasscn/glass-card";

// A static orb with soft color pools under a glassy inner rim.
function DemoOrb() {
  return (
    <div aria-hidden className="relative size-32 shrink-0 sm:size-36">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: [
            "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9), transparent 42%)",
            "radial-gradient(circle at 70% 74%, rgba(125,211,252,0.9), transparent 60%)",
            "radial-gradient(circle at 26% 72%, rgba(196,181,253,0.85), transparent 55%)",
            "linear-gradient(135deg, #e0f2fe, #ddd6fe)",
          ].join(", "),
        }}
      />
      <div
        className="absolute inset-0 rounded-full opacity-35"
        style={{
          boxShadow: [
            "inset 0 1px 1px rgba(255,255,255,0.7)",
            "inset 0 -1px 1px rgba(255,255,255,0.45)",
            "inset 0 0 0 1px rgba(255,255,255,0.22)",
            "inset 0 0 13px rgba(255,255,255,0.18)",
          ].join(", "),
        }}
      />
    </div>
  );
}

export function GlanceCardDemo({ variant = "glance" }: { variant?: string }) {
  const glanceColor = variant.includes("glance-color-") ? "" : "glance-color-black dark:glance-color-white";

  return (
    <a href="#demo" className="group block w-full max-w-sm min-w-2xs">
      <GlassCard
        glassVariant="liquid-refract"
        surfaceClassName={`glance ${glanceColor} ${variant} h-[220px] w-full rounded-2xl border border-black/10 bg-background/50 transition-shadow duration-500 group-hover:shadow-lg dark:border-white/10`}
        className="h-full"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-4 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          <DemoOrb />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pt-6 pb-4">
          <span className="text-primary/70 group-hover:text-primary text-sm font-medium transition-colors duration-300">
            Voice
          </span>
          <span className="text-primary/50 group-hover:text-primary/80 text-sm font-medium transition-colors duration-300">
            Explore →
          </span>
        </div>
      </GlassCard>
    </a>
  );
}
