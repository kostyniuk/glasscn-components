"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "../input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../sheet"
import {
  Sidebar,
  SidebarInset,
  SidebarMenuButton,
  SidebarMenuSubButton,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "../sidebar"
import {
  type FrostGlassVariant,
  glassVariantStyles,
} from "./glass-variants"

const SIDEBAR_WIDTH_MOBILE = "18rem"

const GlassSidebarVariantContext = React.createContext<FrostGlassVariant>("clear")

const glassSidebarVariableStyles: Record<FrostGlassVariant, string> = {
  clear: [
    "[--sidebar:rgba(255,255,255,0.18)]",
    "[--sidebar-foreground:oklch(0.145_0_0)]",
    "[--sidebar-accent:rgba(255,255,255,0.48)]",
    "[--sidebar-accent-foreground:oklch(0.145_0_0)]",
    "[--sidebar-border:rgba(255,255,255,0.34)]",
    "[--sidebar-ring:rgba(255,255,255,0.38)]",
    "dark:[--sidebar:rgba(0,0,0,0.28)]",
    "dark:[--sidebar-foreground:oklch(0.985_0_0)]",
    "dark:[--sidebar-accent:rgba(255,255,255,0.1)]",
    "dark:[--sidebar-accent-foreground:oklch(0.985_0_0)]",
    "dark:[--sidebar-border:rgba(255,255,255,0.12)]",
    "dark:[--sidebar-ring:rgba(255,255,255,0.16)]",
  ].join(" "),
  frosted: [
    "[--sidebar:rgba(255,255,255,0.4)]",
    "[--sidebar-foreground:oklch(0.145_0_0)]",
    "[--sidebar-accent:rgba(255,255,255,0.62)]",
    "[--sidebar-accent-foreground:oklch(0.145_0_0)]",
    "[--sidebar-border:rgba(255,255,255,0.3)]",
    "[--sidebar-ring:rgba(255,255,255,0.32)]",
    "dark:[--sidebar:rgba(0,0,0,0.38)]",
    "dark:[--sidebar-foreground:oklch(0.985_0_0)]",
    "dark:[--sidebar-accent:rgba(255,255,255,0.14)]",
    "dark:[--sidebar-accent-foreground:oklch(0.985_0_0)]",
    "dark:[--sidebar-border:rgba(255,255,255,0.1)]",
    "dark:[--sidebar-ring:rgba(255,255,255,0.14)]",
  ].join(" "),
  subtle: [
    "[--sidebar:rgba(255,255,255,0.14)]",
    "[--sidebar-foreground:oklch(0.145_0_0)]",
    "[--sidebar-accent:rgba(255,255,255,0.28)]",
    "[--sidebar-accent-foreground:oklch(0.145_0_0)]",
    "[--sidebar-border:rgba(0,0,0,0.05)]",
    "[--sidebar-ring:rgba(255,255,255,0.28)]",
    "dark:[--sidebar:rgba(255,255,255,0.05)]",
    "dark:[--sidebar-foreground:oklch(0.985_0_0)]",
    "dark:[--sidebar-accent:rgba(255,255,255,0.08)]",
    "dark:[--sidebar-accent-foreground:oklch(0.985_0_0)]",
    "dark:[--sidebar-border:rgba(255,255,255,0.08)]",
    "dark:[--sidebar-ring:rgba(255,255,255,0.12)]",
  ].join(" "),
}

const glassSidebarInnerSurfaceStyles: Record<FrostGlassVariant, string> = {
  clear: [
    "[&>[data-slot=sidebar-inner]]:backdrop-blur-[2px]",
    "[&>[data-slot=sidebar-inner]]:backdrop-saturate-[1.9]",
    "[&>[data-slot=sidebar-inner]]:shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
    "dark:[&>[data-slot=sidebar-inner]]:shadow-[0_24px_80px_rgba(0,0,0,0.28)]",
  ].join(" "),
  frosted: [
    "[&>[data-slot=sidebar-inner]]:backdrop-blur-[16px]",
    "[&>[data-slot=sidebar-inner]]:backdrop-saturate-[1.6]",
    "[&>[data-slot=sidebar-inner]]:shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
    "dark:[&>[data-slot=sidebar-inner]]:shadow-[0_24px_80px_rgba(0,0,0,0.28)]",
  ].join(" "),
  subtle: [
    "[&>[data-slot=sidebar-inner]]:backdrop-blur-[4px]",
    "[&>[data-slot=sidebar-inner]]:backdrop-saturate-[1.5]",
    "[&>[data-slot=sidebar-inner]]:shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
    "dark:[&>[data-slot=sidebar-inner]]:shadow-[0_24px_80px_rgba(0,0,0,0.28)]",
  ].join(" "),
}

const glassSidebarFloatingInnerStyles = [
  "[&>[data-slot=sidebar-inner]]:group-data-[variant=floating]:rounded-[1.25rem]",
  "[&>[data-slot=sidebar-inner]]:group-data-[variant=floating]:ring-1",
  "[&>[data-slot=sidebar-inner]]:group-data-[variant=floating]:ring-white/25",
  "dark:[&>[data-slot=sidebar-inner]]:group-data-[variant=floating]:ring-white/10",
].join(" ")

function useGlassSidebarVariant(glassVariant?: FrostGlassVariant) {
  const inheritedVariant = React.useContext(GlassSidebarVariantContext)

  return glassVariant ?? inheritedVariant
}

type GlassSidebarVariantProp = {
  glassVariant?: FrostGlassVariant
}

type GlassSidebarProps = React.ComponentProps<typeof Sidebar> &
  GlassSidebarVariantProp

function GlassSidebarVariantProvider({
  glassVariant,
  children,
}: React.PropsWithChildren<{ glassVariant: FrostGlassVariant }>) {
  return (
    <GlassSidebarVariantContext.Provider value={glassVariant}>
      {children}
    </GlassSidebarVariantContext.Provider>
  )
}

function getGlassSidebarRootClasses({
  glassVariant,
  variant,
}: {
  glassVariant: FrostGlassVariant
  variant: GlassSidebarProps["variant"]
}) {
  return cn(
    glassSidebarVariableStyles[glassVariant],
    glassSidebarInnerSurfaceStyles[glassVariant],
    variant === "floating" && glassSidebarFloatingInnerStyles
  )
}

function getGlassSidebarStandaloneClasses(glassVariant: FrostGlassVariant) {
  return cn(
    glassVariantStyles[glassVariant],
    glassSidebarVariableStyles[glassVariant],
    "overflow-hidden",
    "shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
  )
}

function GlassSidebar({
  collapsible = "offcanvas",
  variant = "sidebar",
  glassVariant = "clear",
  className,
  dir,
  side = "left",
  children,
  ...props
}: GlassSidebarProps) {
  const { isMobile, openMobile, setOpenMobile } = useSidebar()

  if (collapsible !== "none" && isMobile) {
    return (
      <GlassSidebarVariantProvider glassVariant={glassVariant}>
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            dir={dir}
            data-sidebar="sidebar"
            data-slot="glass-sidebar"
            data-mobile="true"
            className={cn(
              "w-(--sidebar-width) p-0 text-sidebar-foreground [&>button]:hidden",
              getGlassSidebarStandaloneClasses(glassVariant)
            )}
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      </GlassSidebarVariantProvider>
    )
  }

  return (
    <GlassSidebarVariantProvider glassVariant={glassVariant}>
      <Sidebar
        side={side}
        variant={variant}
        collapsible={collapsible}
        className={cn(
          collapsible === "none"
            ? getGlassSidebarStandaloneClasses(glassVariant)
            : getGlassSidebarRootClasses({ glassVariant, variant }),
          className
        )}
        {...props}
      >
        {children}
      </Sidebar>
    </GlassSidebarVariantProvider>
  )
}

function GlassSidebarTrigger({
  className,
  glassVariant,
  ...props
}: React.ComponentProps<typeof SidebarTrigger> & GlassSidebarVariantProp) {
  const resolvedVariant = useGlassSidebarVariant(glassVariant)

  return (
    <SidebarTrigger
      data-slot="glass-sidebar-trigger"
      className={cn(
        glassSidebarVariableStyles[resolvedVariant],
        glassVariantStyles[resolvedVariant],
        "border-sidebar-border bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent",
        className
      )}
      {...props}
    />
  )
}

function GlassSidebarInset({
  className,
  ...props
}: React.ComponentProps<typeof SidebarInset>) {
  return (
    <SidebarInset
      data-slot="glass-sidebar-inset"
      className={cn(
        "md:peer-data-[variant=inset]:bg-white/10 md:peer-data-[variant=inset]:backdrop-blur-xl md:peer-data-[variant=inset]:ring-1 md:peer-data-[variant=inset]:ring-white/20 dark:md:peer-data-[variant=inset]:bg-black/20 dark:md:peer-data-[variant=inset]:ring-white/10",
        className
      )}
      {...props}
    />
  )
}

function GlassSidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="glass-sidebar-input"
      data-sidebar="input"
      className={cn(
        "h-8 w-full placeholder:text-foreground/75",
        "border-sidebar-border bg-sidebar text-sidebar-foreground shadow-[0_8px_30px_rgba(255,255,255,0.08)]",
        className
      )}
      {...props}
    />
  )
}

function GlassSidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SidebarSeparator>) {
  return (
    <SidebarSeparator
      data-slot="glass-sidebar-separator"
      className={cn("w-auto! bg-sidebar-border", className)}
      {...props}
    />
  )
}

function GlassSidebarMenuButton({
  className,
  ...props
}: React.ComponentProps<typeof SidebarMenuButton>) {
  return (
    <SidebarMenuButton
      data-slot="glass-sidebar-menu-button"
      className={cn(
        "border border-transparent hover:border-sidebar-border hover:bg-sidebar-accent/60 data-active:border-sidebar-border data-active:bg-sidebar-accent data-active:shadow-[0_14px_40px_rgba(255,255,255,0.12)]",
        className
      )}
      {...props}
    />
  )
}

function GlassSidebarMenuSubButton({
  className,
  ...props
}: React.ComponentProps<typeof SidebarMenuSubButton>) {
  return (
    <SidebarMenuSubButton
      data-slot="glass-sidebar-menu-sub-button"
      className={cn(
        "rounded-lg border border-transparent hover:border-sidebar-border hover:bg-sidebar-accent/60 data-active:border-sidebar-border data-active:bg-sidebar-accent data-active:shadow-[0_14px_40px_rgba(255,255,255,0.12)]",
        className
      )}
      {...props}
    />
  )
}

export {
  GlassSidebar,
  GlassSidebarInput,
  GlassSidebarInset,
  GlassSidebarMenuButton,
  GlassSidebarMenuSubButton,
  GlassSidebarSeparator,
  GlassSidebarTrigger,
  glassSidebarVariableStyles,
}
export type { FrostGlassVariant } from "./glass-variants"
