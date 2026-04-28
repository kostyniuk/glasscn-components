import * as React from "react";

import { AlertDemo } from "@/components/demo/alert-demo";
import { AlertDialogDemo } from "@/components/demo/alert-dialog-demo";
import { CalendarDemo } from "@/components/demo/calendar-demo";
import { CardDemo } from "@/components/demo/card-demo";
import { CheckboxDemo } from "@/components/demo/checkbox-demo";
import { ComboboxDemo } from "@/components/demo/combobox-demo";
import { SelectDemo } from "@/components/demo/select-demo";
import { SeparatorDemo } from "@/components/demo/separator-demo";
import { SidebarDemo } from "@/components/demo/sidebar-demo";
import { PackageManagerProvider } from "@/components/ui/code-block-command";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCodeBlockCommand } from "@/components/ui/glasscn/glass-code-block-command";
import type { FrostGlassVariant } from "@/lib/glass-variants";

export const glassVariants = ["clear", "frosted", "subtle", "liquid", "liquid-bold"] as const;

export type ApiProp = { component?: string; name: string; type: string; defaultValue?: string; description: string };

export type ComponentDoc = {
  slug: string;
  registryName: string;
  title: string;
  description: string;
  installName: string;
  importPath: string;
  Demo: React.ComponentType<{ variant?: FrostGlassVariant }>;
  usageCode: string;
  api: ApiProp[];
  previewClassName?: string;
  variantsGridClassName?: string;
};

const glassVariantApi: ApiProp = {
  name: "glassVariant",
  type: '"clear" | "frosted" | "subtle" | "liquid" | "liquid-bold"',
  defaultValue: '"clear"',
  description: "Controls the glass surface treatment.",
};

function inheritedProps(component: string, primitive: string): ApiProp {
  return {
    component,
    name: "...props",
    type: primitive,
    description: "Props from the underlying shadcn/ui primitive.",
  };
}

function glassVariantFor(component: string): ApiProp {
  return { ...glassVariantApi, component };
}

function BadgeDemo({ variant = "clear" }: { variant?: FrostGlassVariant }) {
  return <GlassBadge glassVariant={variant}>Badge</GlassBadge>;
}

function ButtonDemo({ variant = "clear" }: { variant?: FrostGlassVariant }) {
  return <GlassButton glassVariant={variant}>Button</GlassButton>;
}

function CodeBlockCommandDemo({ variant = "clear" }: { variant?: FrostGlassVariant }) {
  return (
    <PackageManagerProvider>
      <GlassCodeBlockCommand
        glassVariant={variant}
        className="w-full max-w-xl"
        prompt="Install the glass code block command"
        npm="npx shadcn add @glasscn/glass-code-block-command"
        pnpm="pnpm dlx shadcn add @glasscn/glass-code-block-command"
        yarn="yarn dlx shadcn add @glasscn/glass-code-block-command"
        bun="bunx shadcn add @glasscn/glass-code-block-command"
      />
    </PackageManagerProvider>
  );
}

const componentDocs: ComponentDoc[] = [
  {
    slug: "glass-alert",
    registryName: "glass-alert",
    title: "Glass Alert",
    description: "A status message surface with the shared glass variant system.",
    installName: "@glasscn/glass-alert",
    importPath: "@/components/ui/glasscn/glass-alert",
    Demo: AlertDemo,
    variantsGridClassName: "grid-cols-1",
    usageCode: String.raw`import { CheckCircle2Icon } from "lucide-react"

import { AlertDescription, AlertTitle } from "@/components/ui/alert"
import { GlassAlert } from "@/components/ui/glasscn/glass-alert"

export function AlertDemo() {
  return (
    <GlassAlert glassVariant="liquid-bold">
      <CheckCircle2Icon />
      <AlertTitle>Payment successful</AlertTitle>
      <AlertDescription>Your payment has been processed.</AlertDescription>
    </GlassAlert>
  )
}`,
    api: [glassVariantFor("GlassAlert"), inheritedProps("GlassAlert", "React.ComponentProps<typeof Alert>")],
  },
  {
    slug: "glass-alert-dialog",
    registryName: "glass-alert-dialog",
    title: "Glass Alert Dialog",
    description: "A modal confirmation dialog with a glass-styled content surface.",
    installName: "@glasscn/glass-alert-dialog",
    importPath: "@/components/ui/glasscn/glass-alert-dialog",
    Demo: AlertDialogDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-5",
    usageCode: String.raw`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  GlassAlertDialogContent,
} from "@/components/ui/glasscn/glass-alert-dialog"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Show Dialog</AlertDialogTrigger>
      <GlassAlertDialogContent glassVariant="liquid-bold">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </GlassAlertDialogContent>
    </AlertDialog>
  )
}`,
    api: [
      glassVariantFor("GlassAlertDialogContent"),
      inheritedProps("GlassAlertDialogContent", "React.ComponentProps<typeof AlertDialogContent>"),
      inheritedProps("AlertDialog primitives", "Re-exported alert dialog primitive props"),
    ],
  },
  {
    slug: "glass-badge",
    registryName: "glass-badge",
    title: "Glass Badge",
    description: "A compact label for metadata and status using glass surface treatments.",
    installName: "@glasscn/glass-badge",
    importPath: "@/components/ui/glasscn/glass-badge",
    Demo: BadgeDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-5",
    usageCode: String.raw`import { GlassBadge } from "@/components/ui/glasscn/glass-badge"

export function BadgeDemo() {
  return <GlassBadge glassVariant="liquid-bold">Badge</GlassBadge>
}`,
    api: [glassVariantFor("GlassBadge"), inheritedProps("GlassBadge", "React.ComponentProps<typeof Badge>")],
  },
  {
    slug: "glass-button",
    registryName: "glass-button",
    title: "Glass Button",
    description: "A button for actions and controls with reusable glass variants.",
    installName: "@glasscn/glass-button",
    importPath: "@/components/ui/glasscn/glass-button",
    Demo: ButtonDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-5",
    usageCode: String.raw`import { GlassButton } from "@/components/ui/glasscn/glass-button"

export function ButtonDemo() {
  return <GlassButton glassVariant="liquid-bold">Button</GlassButton>
}`,
    api: [glassVariantFor("GlassButton"), inheritedProps("GlassButton", "React.ComponentProps<typeof Button>")],
  },
  {
    slug: "glass-calendar",
    registryName: "glass-calendar",
    title: "Glass Calendar",
    description: "A date picker calendar with glass panel styling.",
    installName: "@glasscn/glass-calendar",
    importPath: "@/components/ui/glasscn/glass-calendar",
    Demo: CalendarDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import { GlassCalendar } from "@/components/ui/glasscn/glass-calendar"

export function CalendarDemo() {
  return <GlassCalendar glassVariant="liquid-bold" mode="single" />
}`,
    api: [glassVariantFor("GlassCalendar"), inheritedProps("GlassCalendar", "React.ComponentProps<typeof Calendar>")],
  },
  {
    slug: "glass-card",
    registryName: "glass-card",
    title: "Glass Card",
    description: "A reusable content container and footer with glass surface variants.",
    installName: "@glasscn/glass-card",
    importPath: "@/components/ui/glasscn/glass-card",
    Demo: CardDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GlassCard, GlassCardFooter } from "@/components/ui/glasscn/glass-card"

export function CardDemo() {
  return (
    <GlassCard glassVariant="liquid-bold">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login.</CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <GlassCardFooter glassVariant="liquid-bold">...</GlassCardFooter>
    </GlassCard>
  )
}`,
    api: [
      glassVariantFor("GlassCard"),
      inheritedProps("GlassCard", "React.ComponentProps<typeof Card>"),
      glassVariantFor("GlassCardFooter"),
      inheritedProps("GlassCardFooter", "React.ComponentProps<typeof CardFooter>"),
    ],
  },
  {
    slug: "glass-checkbox",
    registryName: "glass-checkbox",
    title: "Glass Checkbox",
    description: "A boolean control with the shared glass variant system.",
    installName: "@glasscn/glass-checkbox",
    importPath: "@/components/ui/glasscn/glass-checkbox",
    Demo: CheckboxDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import { GlassCheckbox } from "@/components/ui/glasscn/glass-checkbox"

export function CheckboxDemo() {
  return <GlassCheckbox glassVariant="liquid-bold" />
}`,
    api: [glassVariantFor("GlassCheckbox"), inheritedProps("GlassCheckbox", "React.ComponentProps<typeof Checkbox>")],
  },
  {
    slug: "glass-code-block-command",
    registryName: "glass-code-block-command",
    title: "Glass Code Block Command",
    description: "A glass-styled package-manager command block with copy support.",
    installName: "@glasscn/glass-code-block-command",
    importPath: "@/components/ui/glasscn/glass-code-block-command",
    Demo: CodeBlockCommandDemo,
    previewClassName: "p-6",
    variantsGridClassName: "grid-cols-1",
    usageCode: String.raw`import {
  GlassCodeBlockCommand,
  PackageManagerProvider,
} from "@/components/ui/glasscn/glass-code-block-command"

export function CodeBlockCommandDemo() {
  return (
    <PackageManagerProvider>
      <GlassCodeBlockCommand
        glassVariant="liquid-bold"
        npm="npx shadcn add @glasscn/glass-button"
        pnpm="pnpm dlx shadcn add @glasscn/glass-button"
        yarn="yarn dlx shadcn add @glasscn/glass-button"
        bun="bunx shadcn add @glasscn/glass-button"
      />
    </PackageManagerProvider>
  )
}`,
    api: [
      glassVariantFor("GlassCodeBlockCommand"),
      inheritedProps("GlassCodeBlockCommand", "Omit<CodeBlockCommandProps, 'className'>"),
    ],
  },
  {
    slug: "glass-combobox",
    registryName: "glass-combobox",
    title: "Glass Combobox",
    description: "A searchable selection control with glass trigger and popup surfaces.",
    installName: "@glasscn/glass-combobox",
    importPath: "@/components/ui/glasscn/glass-combobox",
    Demo: ComboboxDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import {
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  GlassCombobox,
  GlassComboboxContent,
  GlassComboboxInput,
} from "@/components/ui/glasscn/glass-combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js"] as const

export function ComboboxDemo() {
  return (
    <GlassCombobox items={frameworks} glassVariant="liquid-bold">
      <GlassComboboxInput placeholder="Select a framework" />
      <GlassComboboxContent>
        <ComboboxList>
          {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
        </ComboboxList>
      </GlassComboboxContent>
    </GlassCombobox>
  )
}`,
    api: [
      glassVariantFor("GlassCombobox"),
      inheritedProps("GlassCombobox", "React.ComponentProps<typeof Combobox>"),
      inheritedProps("GlassComboboxInput", "React.ComponentProps<typeof ComboboxInput>"),
      inheritedProps("GlassComboboxContent", "React.ComponentProps<typeof ComboboxContent>"),
    ],
  },
  {
    slug: "glass-select",
    registryName: "glass-select",
    title: "Glass Select",
    description: "A select menu with glass-styled trigger and content surfaces.",
    installName: "@glasscn/glass-select",
    importPath: "@/components/ui/glasscn/glass-select",
    Demo: SelectDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import {
  GlassSelect,
  GlassSelectContent,
  GlassSelectTrigger,
} from "@/components/ui/glasscn/glass-select"
import { SelectItem, SelectValue } from "@/components/ui/select"

export function SelectDemo() {
  return (
    <GlassSelect glassVariant="liquid-bold">
      <GlassSelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </GlassSelectTrigger>
      <GlassSelectContent>
        <SelectItem value="apple">Apple</SelectItem>
      </GlassSelectContent>
    </GlassSelect>
  )
}`,
    api: [
      glassVariantFor("GlassSelect"),
      inheritedProps("GlassSelect", "React.ComponentProps<typeof Select>"),
      inheritedProps("GlassSelectTrigger", "React.ComponentProps<typeof SelectTrigger>"),
      inheritedProps("GlassSelectContent", "React.ComponentProps<typeof SelectContent>"),
    ],
  },
  {
    slug: "glass-separator",
    registryName: "glass-separator",
    title: "Glass Separator",
    description: "A divider line tuned for glass UI surfaces.",
    installName: "@glasscn/glass-separator",
    importPath: "@/components/ui/glasscn/glass-separator",
    Demo: SeparatorDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-5",
    usageCode: String.raw`import { GlassSeparator } from "@/components/ui/glasscn/glass-separator"

export function SeparatorDemo() {
  return <GlassSeparator glassVariant="liquid-bold" />
}`,
    api: [
      glassVariantFor("GlassSeparator"),
      inheritedProps("GlassSeparator", "React.ComponentProps<typeof Separator>"),
    ],
  },
  {
    slug: "glass-sidebar",
    registryName: "glass-sidebar",
    title: "Glass Sidebar",
    description: "A compound sidebar system with glass shell, trigger, input, and menu states.",
    installName: "@glasscn/glass-sidebar",
    importPath: "@/components/ui/glasscn/glass-sidebar",
    Demo: SidebarDemo,
    previewClassName: "p-6",
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import {
  GlassSidebar,
  GlassSidebarInput,
  GlassSidebarMenuButton,
} from "@/components/ui/glasscn/glass-sidebar"
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function SidebarDemo() {
  return (
    <SidebarProvider>
      <GlassSidebar glassVariant="liquid-bold" collapsible="none">
        <SidebarContent>
          <GlassSidebarInput placeholder="Search" />
          <SidebarMenu>
            <SidebarMenuItem>
              <GlassSidebarMenuButton isActive>Overview</GlassSidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </GlassSidebar>
    </SidebarProvider>
  )
}`,
    api: [
      glassVariantFor("GlassSidebar"),
      inheritedProps("GlassSidebar", "React.ComponentProps<typeof Sidebar>"),
      glassVariantFor("GlassSidebarTrigger"),
      inheritedProps("GlassSidebarTrigger", "React.ComponentProps<typeof SidebarTrigger>"),
      inheritedProps("GlassSidebarInset", "React.ComponentProps<typeof SidebarInset>"),
      inheritedProps("GlassSidebarInput", "React.ComponentProps<typeof Input>"),
      inheritedProps("GlassSidebarMenuButton", "React.ComponentProps<typeof SidebarMenuButton>"),
      inheritedProps("GlassSidebarMenuSubButton", "React.ComponentProps<typeof SidebarMenuSubButton>"),
      inheritedProps("GlassSidebarSeparator", "React.ComponentProps<typeof GlassSeparator>"),
    ],
  },
];

export function getComponentDocs() {
  return componentDocs;
}

export function getComponentDoc(slug: string) {
  return componentDocs.find((doc) => doc.slug === slug);
}
