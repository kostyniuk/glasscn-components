"use client";

import { GlassRadioGroupItem } from "@/components/ui/glasscn/glass-radio-group";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { type FrostGlassVariant } from "@/lib/glass-variants";

type RadioGroupDemoProps = { variant?: FrostGlassVariant };

function RadioGroupDemo({ variant = "clear" }: RadioGroupDemoProps) {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <div className="flex items-center gap-3">
        <GlassRadioGroupItem glassVariant={variant} value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <GlassRadioGroupItem glassVariant={variant} value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <GlassRadioGroupItem glassVariant={variant} value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}

export { RadioGroupDemo };
