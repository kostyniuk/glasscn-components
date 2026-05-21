"use client";

import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  MessageCircleIcon,
  PhoneIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";

import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassToggleGroup, GlassToggleGroupItem } from "@/components/ui/glasscn/glass-toggle-group";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

function GlassToggleGroupDemo() {
  const [alignment, setAlignment] = useState("center");
  const [section, setSection] = useState("chats");

  return (
    <Card className="flex flex-col items-center gap-6 p-4 bg-background/70" variant="outline">
      <GlassToggleGroup value={alignment} onValueChange={setAlignment} aria-label="Text alignment">
        <GlassToggleGroupItem value="left" aria-label="Align left">
          <AlignLeftIcon className="size-4" />
        </GlassToggleGroupItem>
        <GlassToggleGroupItem value="center" aria-label="Align center">
          <AlignCenterIcon className="size-4" />
        </GlassToggleGroupItem>
        <GlassToggleGroupItem value="right" aria-label="Align right">
          <AlignRightIcon className="size-4" />
        </GlassToggleGroupItem>
      </GlassToggleGroup>

      <GlassToggleGroup defaultValue="monthly" aria-label="Billing period">
        <GlassToggleGroupItem value="monthly">Monthly</GlassToggleGroupItem>
        <GlassToggleGroupItem value="quarterly">Quarterly</GlassToggleGroupItem>
        <GlassToggleGroupItem value="yearly">Yearly</GlassToggleGroupItem>
      </GlassToggleGroup>

      <GlassToggleGroup value={section} onValueChange={setSection} aria-label="Navigation">
        <GlassToggleGroupItem value="contacts" aria-label="Contacts">
          <div className="flex flex-col items-center gap-1">
            <UserIcon className={cn("size-5", section === "contacts" && "text-blue-500 fill-blue-500")} />
            <span className="text-xs">Contacts</span>
          </div>
        </GlassToggleGroupItem>
        <GlassToggleGroupItem value="calls" aria-label="Calls">
          <div className="flex flex-col items-center gap-1">
            <PhoneIcon className={cn("size-5", section === "calls" && "text-blue-500 fill-blue-500")} />
            <span className="text-xs">Calls</span>
          </div>
        </GlassToggleGroupItem>
        <GlassToggleGroupItem value="chats" aria-label="Chats">
          <div className="flex flex-col items-center gap-1">
            <MessageCircleIcon className={cn("size-5", section === "chats" && "text-blue-500 fill-blue-500")} />
            <span className="text-xs">Chats</span>
          </div>
        </GlassToggleGroupItem>
        <GlassToggleGroupItem value="profile" aria-label="Profile">
          <div className="flex flex-col items-center gap-1">
            <SettingsIcon className={cn("size-5", section === "profile" && "text-blue-500 fill-blue-500")} />
            <span className="text-xs">Profile</span>
          </div>
        </GlassToggleGroupItem>
      </GlassToggleGroup>
    </Card>
  );
}

export { GlassToggleGroupDemo };
