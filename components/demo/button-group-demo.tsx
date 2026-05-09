"use client";

import { ArchiveIcon, FlagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GlassButtonGroup } from "@/components/ui/glasscn/glass-button-group";
import { type FrostGlassVariant } from "@/lib/glass-variants";

type ButtonGroupDemoProps = { variant?: FrostGlassVariant };

function ButtonGroupDemo({ variant = "clear" }: ButtonGroupDemoProps) {
  return (
    <GlassButtonGroup glassVariant={variant}>
      <Button variant="ghost" className="border-0 bg-transparent shadow-none">
        <ArchiveIcon />
        Archive
      </Button>
      <Button variant="ghost" className="border-0 bg-transparent shadow-none">
        <FlagIcon />
        Report
      </Button>
    </GlassButtonGroup>
  );
}

export { ButtonGroupDemo };
