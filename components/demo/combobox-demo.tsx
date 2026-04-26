"use client";

import { ComboboxEmpty, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { GlassCombobox, GlassComboboxContent, GlassComboboxInput } from "@/components/ui/glasscn/glass-combobox";
import { FrostGlassVariant } from "@/lib/glass-variants";

import { GlassCard } from "../ui/glasscn/glass-card";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const;

type ComboboxDemoProps = { variant?: FrostGlassVariant };

function ComboboxDemo({ variant = "clear" }: ComboboxDemoProps) {
  return (
    <GlassCard className="p-4">
      <GlassCombobox items={frameworks} glassVariant={variant}>
        <GlassComboboxInput placeholder="Select a framework" />
        <GlassComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </GlassComboboxContent>
      </GlassCombobox>
    </GlassCard>
  );
}

export { ComboboxDemo };
