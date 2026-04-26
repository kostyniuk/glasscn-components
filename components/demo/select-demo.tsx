"use client";

import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassSelect, GlassSelectContent, GlassSelectTrigger } from "@/components/ui/glasscn/glass-select";
import { FrostGlassVariant } from "@/components/ui/glasscn/glass-variants";
import { SelectGroup, SelectItem, SelectLabel, SelectValue } from "@/components/ui/select";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
] as const;

type SelectDemoProps = { variant?: FrostGlassVariant };

function SelectDemo({ variant = "clear" }: SelectDemoProps) {
  return (
    <GlassCard className="p-4">
      <GlassSelect items={items} defaultValue={null} glassVariant={variant}>
        <GlassSelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="Select a fruit" />
        </GlassSelectTrigger>
        <GlassSelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.label} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </GlassSelectContent>
      </GlassSelect>
    </GlassCard>
  );
}

export { SelectDemo };
