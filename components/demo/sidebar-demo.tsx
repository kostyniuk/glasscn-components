"use client"

import {
  BellIcon,
  HomeIcon,
  Layers3Icon,
  SearchIcon,
  Settings2Icon,
  SparklesIcon,
} from "lucide-react"

import {
  GlassSidebar,
  GlassSidebarInput,
  GlassSidebarMenuButton,
  GlassSidebarMenuSubButton,
  GlassSidebarSeparator,
} from "@/components/ui/glasscn/glass-sidebar"
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { type FrostGlassVariant } from "@/components/ui/glasscn/glass-variants"

const primaryItems = [
  { label: "Overview", icon: HomeIcon, active: true },
  { label: "Discover", icon: SparklesIcon },
]

const librarySubItems = [
  { label: "Components" },
  { label: "Templates" },
  { label: "Icons" },
]

const secondaryItems = [
  { label: "Notifications", icon: BellIcon },
  { label: "Settings", icon: Settings2Icon },
]

type SidebarDemoProps = {
  variant?: FrostGlassVariant
}

function SidebarDemo({ variant = "clear" }: SidebarDemoProps) {
  return (
    <SidebarProvider defaultOpen className="min-h-0">
      <div className="overflow-hidden rounded-[1.75rem] border border-white/20 dark:border-white/10">
        <GlassSidebar collapsible="none" glassVariant={variant} className="w-full rounded-[1.75rem]">
          <SidebarHeader className="gap-2 px-3 pt-3 pb-1.5">
            <div className="flex items-center justify-between gap-3 px-2">
              <div>
                <p className="text-xs tracking-[0.18em] text-black/45 uppercase dark:text-white/45">
                  Workspace
                </p>
                <h3 className="text-sm font-medium text-black dark:text-white">
                  Aurora
                </h3>
              </div>
              <div className="rounded-full border border-white/25 bg-white/35 px-2 py-1 text-[11px] font-medium text-black dark:border-white/10 dark:bg-white/10 dark:text-white">
                Team
              </div>
            </div>
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute top-1/2 left-4 size-3.5 -translate-y-1/2 text-black/45 dark:text-white/45" />
              <GlassSidebarInput
                className="pl-9"
                placeholder="Search components"
              />
            </div>
          </SidebarHeader>

          <SidebarContent className="px-2 pb-1">
            <SidebarGroup>
              <SidebarGroupLabel>Navigate</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {primaryItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <GlassSidebarMenuButton isActive={item.active}>
                        <item.icon />
                        <span>{item.label}</span>
                      </GlassSidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <GlassSidebarMenuButton>
                      <Layers3Icon />
                      <span>Library</span>
                    </GlassSidebarMenuButton>
                    <SidebarMenuSub>
                      {librarySubItems.map((item) => (
                        <SidebarMenuSubItem key={item.label}>
                          <GlassSidebarMenuSubButton>
                            {item.label}
                          </GlassSidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <GlassSidebarSeparator className="my-2" />

            <SidebarGroup>
              <SidebarGroupLabel>Preferences</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {secondaryItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <GlassSidebarMenuButton>
                        <item.icon />
                        <span>{item.label}</span>
                      </GlassSidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="px-3 pt-1.5 pb-3">
            <div className="rounded-2xl border border-white/20 bg-white/18 p-2.5 dark:border-white/10 dark:bg-white/8">
              <p className="text-sm font-medium text-black dark:text-white">
                Glass Surface
              </p>
              <p className="mt-1 text-xs leading-4.5 text-black/55 dark:text-white/55">
                Compound navigation with matching glass states.
              </p>
            </div>
          </SidebarFooter>
        </GlassSidebar>
      </div>
    </SidebarProvider>
  )
}

export { SidebarDemo }
