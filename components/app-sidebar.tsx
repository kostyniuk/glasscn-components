"use client";

import Link from "next/link";
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
        // { title: "Liquid Switch", url: "/components/liquid-switch" },
        // { title: "Liquid Text", url: "/components/liquid-text" },
        // { title: "Liquid Watch", url: "/components/liquid-watch" },
        { title: "Select", url: "/components/glass-select" },
        { title: "Separator", url: "/components/glass-separator" },
        { title: "Sidebar", url: "/components/glass-sidebar" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof GlassSidebar>) {
  const pathname = usePathname();

  return (
    <GlassSidebar
      {...props}
      variant="floating"
      glassVariant="liquid"
      className="top-2 bottom-2 left-2 h-auto md:top-4 md:bottom-4 md:left-4 md:h-auto [&>[data-slot=sidebar-inner]]:rounded-[1.5rem]"
    >
      <SidebarContent className="px-3 pt-2">
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} className="bg-transparent">
            <SidebarGroupLabel className="mb-2 font-mono text-xs tracking-wider text-black/50 uppercase dark:text-white/50">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <GlassSidebarMenuButton
                      isActive={pathname === item.url}
                      render={<Link href={item.url} />}
                      className="h-9 rounded-xl text-black/70 hover:text-black data-[active=true]:text-black dark:text-white/70 dark:hover:text-white dark:data-[active=true]:text-white"
                    >
                      {item.title}
                    </GlassSidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </GlassSidebar>
  );
}
