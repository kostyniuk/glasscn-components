"use client";

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
        { title: "Alert", url: "/#alert" },
        { title: "Alert Dialog", url: "/#alert-dialog" },
        { title: "Badge", url: "/#badge" },
        { title: "Button", url: "/#button" },
        { title: "Calendar", url: "/#calendar" },
        { title: "Card", url: "/#card" },
        { title: "Checkbox", url: "/#checkbox" },
        { title: "Combobox", url: "/#combobox" },
        { title: "Separator", url: "/#separator" },
        { title: "Sidebar", url: "/#sidebar" },
        { title: "Select", url: "/#select" },
      ],
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof GlassSidebar>) {
  const [activeHash, setActiveHash] = React.useState(() => (typeof window === "undefined" ? "" : window.location.hash));

  React.useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <GlassSidebar {...props} variant="floating" glassVariant="frosted" className="h-fit">
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} className="bg-transparent">
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <GlassSidebarMenuButton
                      isActive={activeHash === item.url.split("/")[1]}
                      render={<a href={item.url} />}
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
      <SidebarRail />
    </GlassSidebar>
  );
}
