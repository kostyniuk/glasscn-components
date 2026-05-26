"use client";

import { CalendarIcon, FileTextIcon, SettingsIcon, UserIcon } from "lucide-react";

import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassCommand, GlassCommandInput } from "@/components/ui/glasscn/glass-command";
import { FrostGlassVariant } from "@/lib/glass-variants";

type CommandDemoProps = { variant?: FrostGlassVariant };

function CommandDemo({ variant = "clear" }: CommandDemoProps) {
  const command = (
    <GlassCommand glassVariant={variant}>
      <GlassCommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FileTextIcon />
            <span>Search docs</span>
            <CommandShortcut>Ctrl K</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </GlassCommand>
  );

  if (variant === "liquid-refract") {
    return <div className="w-full max-w-md p-4">{command}</div>;
  }

  return (
    <GlassCard glassVariant={variant} className="w-full max-w-md p-4">
      {command}
    </GlassCard>
  );
}

export { CommandDemo };
