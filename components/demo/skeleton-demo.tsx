"use client";

import { GlassSkeleton } from "@/components/ui/glasscn/glass-skeleton";
import { type FrostGlassVariant } from "@/lib/glass-variants";

type SkeletonDemoProps = { variant?: FrostGlassVariant };

function SkeletonDemo({ variant = "clear" }: SkeletonDemoProps) {
  return (
    <div className="flex items-center gap-4">
      <GlassSkeleton glassVariant={variant} className="size-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <GlassSkeleton glassVariant={variant} className="h-4 w-[200px]" />
        <GlassSkeleton glassVariant={variant} className="h-4 w-[160px]" />
      </div>
    </div>
  );
}

export { SkeletonDemo };
