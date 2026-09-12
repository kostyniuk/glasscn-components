import { GlassThemeSwitcher } from "@/components/ui/glasscn/glass-theme-switcher";

import { HeaderPill, HeaderPillGroup } from "./header-pill";

export function ThemeSwitcherCard() {
  return (
    <HeaderPill contentClassName="flex items-center px-1">
      <HeaderPillGroup>
        <GlassThemeSwitcher />
      </HeaderPillGroup>
    </HeaderPill>
  );
}
