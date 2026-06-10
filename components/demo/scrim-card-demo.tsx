import { CardContent } from "@/components/ui/card";
import { GlassScrimCard, type GlassScrimSide } from "@/components/ui/glasscn/glass-scrim-card";

type ScrimCardDemoProps = { variant?: GlassScrimSide };

export function ScrimCardDemo({ variant = "top" }: ScrimCardDemoProps) {
  return (
    <GlassScrimCard
      scrim={variant}
      className="w-full max-w-sm min-w-2xs"
      surfaceClassName="w-full max-w-sm min-w-2xs"
    >
      <CardContent className="flex flex-col gap-6 p-6 pb-0">
        <p className="text-base leading-relaxed font-normal">
          The current CEO of Apple is <strong>Tim Cook</strong>. Apple has announced that Cook will step down on
          September 1, 2026, and will be succeeded by John Ternus.
        </p>
        <p className="text-sm text-white/75">Exodus Honey</p>
      </CardContent>
    </GlassScrimCard>
  );
}
