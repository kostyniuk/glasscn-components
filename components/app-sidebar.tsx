"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

import { GlassSidebar, GlassSidebarMenuButton } from "@/components/ui/glasscn/glass-sidebar";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Components",
      items: [
        { title: "Alert", url: "/components/glass-alert" },
        { title: "Alert Dialog", url: "/components/glass-alert-dialog" },
        { title: "Badge", url: "/components/glass-badge" },
        { title: "Button", url: "/components/glass-button" },
        { title: "Calendar", url: "/components/glass-calendar" },
        { title: "Card", url: "/components/glass-card" },
        { title: "Checkbox", url: "/components/glass-checkbox" },
        { title: "Code Block Command", url: "/components/glass-code-block-command" },
        { title: "Combobox", url: "/components/glass-combobox" },
        { title: "Separator", url: "/components/glass-separator" },
        { title: "Sidebar", url: "/components/glass-sidebar" },
        { title: "Select", url: "/components/glass-select" },
      ],
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof GlassSidebar>) {
  const pathname = usePathname();

  return (
    <GlassSidebar {...props} variant="floating" glassVariant="liquid-bold" className="h-fit">
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} className="bg-transparent">
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <GlassSidebarMenuButton isActive={pathname === item.url} render={<a href={item.url} />}>
                      {item.title}
                    </GlassSidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </GlassSidebar>
  );
}
