import * as React from "react";

import { ComponentPreview } from "@/components/component-preview";
import { AlertDemo } from "@/components/demo/alert-demo";
import { AlertDialogDemo } from "@/components/demo/alert-dialog-demo";
import { ButtonGroupDemo } from "@/components/demo/button-group-demo";
import { CalendarDemo } from "@/components/demo/calendar-demo";
import { CardDemo } from "@/components/demo/card-demo";
import { CheckboxDemo } from "@/components/demo/checkbox-demo";
import { ComboboxDemo } from "@/components/demo/combobox-demo";
import { CommandDemo } from "@/components/demo/command-demo";
import { DropdownMenuDemo } from "@/components/demo/dropdown-menu-demo";
import { GlassToggleGroupDemo } from "@/components/demo/glass-toggle-group-demo";
import { InputDemo } from "@/components/demo/input-demo";
import { ItemDemo } from "@/components/demo/item-demo";
import { PopoverDemo } from "@/components/demo/popover-demo";
import { ProgressDemo } from "@/components/demo/progress-demo";
import { RadioGroupDemo } from "@/components/demo/radio-group-demo";
import { SelectDemo } from "@/components/demo/select-demo";
import { SeparatorDemo } from "@/components/demo/separator-demo";
import { SidebarDemo } from "@/components/demo/sidebar-demo";
import { SkeletonDemo } from "@/components/demo/skeleton-demo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageManagerProvider } from "@/components/ui/code-block-command";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCodeBlockCommand } from "@/components/ui/glasscn/glass-code-block-command";
import { HighlightText } from "@/components/ui/highlight-text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { FrostGlassVariant } from "@/lib/glass-variants";

export const glassVariants = ["clear", "frosted", "subtle", "liquid", "liquid-refract"] as const;
export const highlightTextVariants = ["lime", "yellow", "pink", "cyan", "orange"] as const;

export type ApiProp = { component?: string; name: string; type: string; defaultValue?: string; description: string };

export type ComponentDoc = {
  slug: string;
  registryName: string;
  title: string;
  description: string;
  installName: string;
  importPath: string;
  Demo: React.ComponentType<{ variant?: any }>;
  usageCode: string;
  api: ApiProp[];
  category?: "custom";
  variants?: readonly string[];
  defaultVariant?: string;
  previewClassName?: string;
  variantsGridClassName?: string;
};

const glassVariantApi: ApiProp = {
  name: "glassVariant",
  type: '"clear" | "frosted" | "subtle" | "liquid" | "liquid-refract"',
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

const previewTabsCode = String.raw`import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-help-foreground">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-help-foreground">
            Page views are up 25% compared to last month.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and download your detailed reports. Export data in
              multiple formats for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-help-foreground">
            You have 5 reports ready and available to export.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your account preferences and options. Customize your
              experience to fit your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-help-foreground">
            Configure notifications, security, and themes.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}`;

function TabsPreviewContent() {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-help-foreground text-sm">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-help-foreground text-sm">
            Page views are up 25% compared to last month.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and download your detailed reports. Export data in multiple formats for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-help-foreground text-sm">
            You have 5 reports ready and available to export.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your account preferences and options. Customize your experience to fit your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-help-foreground text-sm">
            Configure notifications, security, and themes.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function ComponentPreviewDemo({ variant = "glass" }: { variant?: string }) {
  return (
    <ComponentPreview
      variant={variant === "default" ? "default" : "glass"}
      previewGlassVariant="clear"
      codeGlassVariant="frosted"
      className="w-full max-w-2xl"
      previewClassName="min-h-44"
      component={<TabsPreviewContent />}
      code={previewTabsCode}
    />
  );
}

function HighlightTextDemo({ variant = "lime" }: { variant?: string }) {
  return (
    <p className="text-3xl font-semibold tracking-tight text-black">
      <HighlightText variant={variant as (typeof highlightTextVariants)[number]}>Highlight text</HighlightText>
    </p>
  );
}

const componentDocs: ComponentDoc[] = [
  {
    slug: "highlight-text",
    registryName: "highlight-text",
    title: "Highlight Text",
    description: "Inline text highlight with preset color variants and custom background class support.",
    installName: "@glasscn/highlight-text",
    importPath: "@/components/ui/highlight-text",
    Demo: HighlightTextDemo,
    category: "custom",
    variants: highlightTextVariants,
    defaultVariant: "lime",
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-2",
    usageCode: String.raw`import { HighlightText } from "@/components/ui/highlight-text"

export function HighlightTextDemo() {
  return <HighlightText variant="lime">Highlight text</HighlightText>
}`,
    api: [
      {
        component: "HighlightText",
        name: "variant",
        type: '"lime" | "yellow" | "pink" | "cyan" | "orange"',
        defaultValue: '"lime"',
        description: "Controls the preset highlight color.",
      },
      {
        component: "HighlightText",
        name: "className",
        type: "string",
        description: "Applies custom classes to the highlight background layer, such as a custom bg-* utility.",
      },
      inheritedProps("HighlightText", "children: React.ReactNode"),
    ],
  },
  {
    slug: "component-preview",
    registryName: "component-preview",
    title: "Component Preview",
    description: "A preview shell for component demos with switchable default and glass variants.",
    installName: "@glasscn/component-preview",
    importPath: "@/components/component-preview",
    Demo: ComponentPreviewDemo,
    category: "custom",
    variants: ["default", "glass"] as const,
    defaultVariant: "glass",
    previewClassName: "p-6",
    variantsGridClassName: "grid-cols-1!",
    usageCode: String.raw`import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ComponentPreview } from "@/components/component-preview"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Demo() {
  return (
    <ComponentPreview
      variant="glass"
      component={
        <Tabs defaultValue="overview" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>View your key metrics and recent project activity.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-help-foreground">
                You have 12 active projects and 3 pending tasks.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      }
      code={String.raw\`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"\`}
      previewGlassVariant="clear"
      codeGlassVariant="frosted"
    />
  )
}`,
    api: [
      {
        component: "ComponentPreview",
        name: "variant",
        type: '"default" | "glass"',
        defaultValue: '"default"',
        description: "Switches between the plain preview shell and the glass preview shell.",
      },
      {
        component: "ComponentPreview",
        name: "component",
        type: "React.ReactNode",
        description: "The rendered preview content shown in the top panel.",
      },
      {
        component: "ComponentPreview",
        name: "code",
        type: "string",
        description: "The raw source string used by the copy button.",
      },
      {
        component: "ComponentPreview",
        name: "language",
        type: "string",
        defaultValue: '"tsx"',
        description: "Language passed to the internal Shiki highlighter for code rendering.",
      },
      {
        component: "ComponentPreview",
        name: "previewGlassVariant",
        type: '"clear" | "frosted" | "subtle" | "liquid" | "liquid-refract"',
        defaultValue: '"clear"',
        description: "Controls the preview panel glass treatment when `variant` is `glass`.",
      },
      {
        component: "ComponentPreview",
        name: "codeGlassVariant",
        type: '"clear" | "frosted" | "subtle" | "liquid" | "liquid-refract"',
        defaultValue: '"frosted"',
        description: "Controls the code panel glass treatment when `variant` is `glass`.",
      },
      inheritedProps("ComponentPreview", `React.ComponentProps<"div">`),
    ],
  },
  {
    slug: "glass-toggle-group",
    registryName: "glass-toggle-group",
    title: "Glass Toggle Group",
    description: "A segmented control with a sliding glass puck indicator. Supports icons, text, or any React content.",
    installName: "@glasscn/glass-toggle-group",
    importPath: "@/components/ui/glasscn/glass-toggle-group",
    Demo: GlassToggleGroupDemo,
    category: "custom",
    variants: ["default"] as const,
    defaultVariant: "default",
    variantsGridClassName: "grid-cols-1",
    usageCode: String.raw`import { useState } from "react"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  MessageCircleIcon,
  PhoneIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import {
  GlassToggleGroup,
  GlassToggleGroupItem,
} from "@/components/ui/glasscn/glass-toggle-group"
import { cn } from "@/lib/utils"

export function ToggleGroupDemo() {
  const [alignment, setAlignment] = useState("center")
  const [section, setSection] = useState("chats")

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Icon-only toggle */}
      <GlassToggleGroup
        value={alignment}
        onValueChange={setAlignment}
        aria-label="Text alignment"
      >
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

      {/* Text-only toggle */}
      <GlassToggleGroup defaultValue="monthly" aria-label="Billing period">
        <GlassToggleGroupItem value="monthly">Monthly</GlassToggleGroupItem>
        <GlassToggleGroupItem value="quarterly">Quarterly</GlassToggleGroupItem>
        <GlassToggleGroupItem value="yearly">Yearly</GlassToggleGroupItem>
      </GlassToggleGroup>

      {/* Icon + text with active color */}
      <GlassToggleGroup
        value={section}
        onValueChange={setSection}
        aria-label="Navigation"
      >
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
    </div>
  )
}`,
    api: [
      {
        component: "GlassToggleGroup",
        name: "value",
        type: "string",
        description: "The controlled value of the selected item.",
      },
      {
        component: "GlassToggleGroup",
        name: "defaultValue",
        type: "string",
        description: "The default value for uncontrolled usage.",
      },
      {
        component: "GlassToggleGroup",
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Callback fired when the selected value changes.",
      },
      {
        component: "GlassToggleGroupItem",
        name: "value",
        type: "string",
        description: "The unique value for this item.",
      },
      {
        component: "GlassToggleGroupItem",
        name: "children",
        type: "React.ReactNode",
        description: "The content to display (icon, text, or any React element).",
      },
    ],
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
  return <GlassButton glassVariant="liquid">Button</GlassButton>
}`,
    api: [glassVariantFor("GlassButton"), inheritedProps("GlassButton", "React.ComponentProps<typeof Button>")],
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
  return <GlassBadge glassVariant="liquid">Badge</GlassBadge>
}`,
    api: [glassVariantFor("GlassBadge"), inheritedProps("GlassBadge", "React.ComponentProps<typeof Badge>")],
  },
  {
    slug: "glass-button-group",
    registryName: "glass-button-group",
    title: "Glass Button Group",
    description: "A grouped set of buttons with shared glass styling and separators.",
    installName: "@glasscn/glass-button-group",
    importPath: "@/components/ui/glasscn/glass-button-group",
    Demo: ButtonGroupDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import { ArchiveIcon, FlagIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GlassButtonGroup } from "@/components/ui/glasscn/glass-button-group"

export function ButtonGroupDemo() {
  return (
    <GlassButtonGroup glassVariant="liquid">
      <Button variant="ghost" className="bg-transparent border-0 shadow-none">
        <ArchiveIcon />
        Archive
      </Button>
      <Button variant="ghost" className="bg-transparent border-0 shadow-none">
        <FlagIcon />
        Report
      </Button>
    </GlassButtonGroup>
  )
}`,
    api: [
      glassVariantFor("GlassButtonGroup"),
      inheritedProps("GlassButtonGroup", "React.ComponentProps<typeof ButtonGroup>"),
    ],
  },
  {
    slug: "glass-input",
    registryName: "glass-input",
    title: "Glass Input",
    description: "A text input field with glass surface treatments.",
    installName: "@glasscn/glass-input",
    importPath: "@/components/ui/glasscn/glass-input",
    Demo: InputDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-5",
    usageCode: String.raw`import { GlassInput } from "@/components/ui/glasscn/glass-input"

export function InputDemo() {
  return (
    <GlassInput
      glassVariant="liquid"
      placeholder="Enter text..."
      className="placeholder:text-help-foreground"
    />
  )
}`,
    api: [glassVariantFor("GlassInput"), inheritedProps("GlassInput", "React.ComponentProps<typeof Input>")],
  },
  {
    slug: "glass-item",
    registryName: "glass-item",
    title: "Glass Item",
    description: "A versatile list item with glass surface treatments.",
    installName: "@glasscn/glass-item",
    importPath: "@/components/ui/glasscn/glass-item",
    Demo: ItemDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import { BadgeCheckIcon } from "lucide-react"

import {
  GlassItem,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/glasscn/glass-item"

export function ItemDemo() {
  return (
    <GlassItem glassVariant="liquid" size="sm">
      <ItemMedia>
        <BadgeCheckIcon className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Your profile has been verified.</ItemTitle>
      </ItemContent>
    </GlassItem>
  )
}`,
    api: [glassVariantFor("GlassItem"), inheritedProps("GlassItem", "React.ComponentProps<typeof Item>")],
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
  return <GlassCheckbox glassVariant="liquid" />
}`,
    api: [glassVariantFor("GlassCheckbox"), inheritedProps("GlassCheckbox", "React.ComponentProps<typeof Checkbox>")],
  },
  {
    slug: "glass-radio-group",
    registryName: "glass-radio-group",
    title: "Glass Radio Group",
    description: "A radio group with glass-styled radio items.",
    installName: "@glasscn/glass-radio-group",
    importPath: "@/components/ui/glasscn/glass-radio-group",
    Demo: RadioGroupDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-5",
    usageCode: String.raw`import { GlassRadioGroupItem } from "@/components/ui/glasscn/glass-radio-group"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <GlassRadioGroupItem glassVariant="liquid" value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
    </RadioGroup>
  )
}`,
    api: [
      glassVariantFor("GlassRadioGroupItem"),
      inheritedProps("GlassRadioGroupItem", "React.ComponentProps<typeof RadioGroupItem>"),
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
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-2",
    usageCode: String.raw`import { GlassSeparator } from "@/components/ui/glasscn/glass-separator"

export function SeparatorDemo() {
  return <GlassSeparator glassVariant="liquid" />
}`,
    api: [
      glassVariantFor("GlassSeparator"),
      inheritedProps("GlassSeparator", "React.ComponentProps<typeof Separator>"),
    ],
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
  return <GlassCalendar glassVariant="liquid" mode="single" />
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
    <GlassCard glassVariant="liquid">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login.</CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <GlassCardFooter glassVariant="liquid">...</GlassCardFooter>
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
        glassVariant="liquid"
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
    <GlassAlert glassVariant="liquid">
      <CheckCircle2Icon />
      <AlertTitle>Payment successful</AlertTitle>
      <AlertDescription>Your payment has been processed.</AlertDescription>
    </GlassAlert>
  )
}`,
    api: [glassVariantFor("GlassAlert"), inheritedProps("GlassAlert", "React.ComponentProps<typeof Alert>")],
  },
  {
    slug: "glass-popover",
    registryName: "glass-popover",
    title: "Glass Popover",
    description: "A floating content panel with glass surface treatments.",
    installName: "@glasscn/glass-popover",
    importPath: "@/components/ui/glasscn/glass-popover",
    Demo: PopoverDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-5",
    usageCode: String.raw`import { Button } from "@/components/ui/button"
import { GlassPopoverContent } from "@/components/ui/glasscn/glass-popover"
import {
  Popover,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <GlassPopoverContent glassVariant="liquid">
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description text here.</PopoverDescription>
        </PopoverHeader>
      </GlassPopoverContent>
    </Popover>
  )
}`,
    api: [
      glassVariantFor("GlassPopoverContent"),
      inheritedProps("GlassPopoverContent", "React.ComponentProps<typeof PopoverContent>"),
    ],
  },
  {
    slug: "glass-progress",
    registryName: "glass-progress",
    title: "Glass Progress",
    description: "A progress indicator with glass track treatments.",
    installName: "@glasscn/glass-progress",
    importPath: "@/components/ui/glasscn/glass-progress",
    Demo: ProgressDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    defaultVariant: "liquid",
    usageCode: String.raw`import { Field, FieldLabel } from "@/components/ui/field"
import { GlassProgress } from "@/components/ui/glasscn/glass-progress"

export function ProgressWithLabel() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="progress-upload">
        <span>Upload progress</span>
        <span className="ml-auto">66%</span>
      </FieldLabel>
      <GlassProgress value={66} id="progress-upload" glassVariant="liquid" />
    </Field>
  )
}`,
    api: [glassVariantFor("GlassProgress"), inheritedProps("GlassProgress", "ProgressPrimitive.Root.Props")],
  },
  {
    slug: "glass-command",
    registryName: "glass-command",
    title: "Glass Command",
    description: "A command menu with glass-styled palette, input, and item states.",
    installName: "@glasscn/glass-command",
    importPath: "@/components/ui/glasscn/glass-command",
    Demo: CommandDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import {
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  GlassCommand,
  GlassCommandInput,
} from "@/components/ui/glasscn/glass-command"

export function CommandDemo() {
  return (
    <GlassCommand glassVariant="liquid">
      <GlassCommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search docs</CommandItem>
        </CommandGroup>
      </CommandList>
    </GlassCommand>
  )
}`,
    api: [
      glassVariantFor("GlassCommand"),
      inheritedProps("GlassCommand", "React.ComponentProps<typeof Command>"),
      glassVariantFor("GlassCommandDialog"),
      inheritedProps("GlassCommandDialog", "React.ComponentProps<typeof CommandDialog>"),
      inheritedProps("GlassCommandInput", "React.ComponentProps<typeof CommandInput>"),
    ],
  },
  {
    slug: "glass-dropdown-menu",
    registryName: "glass-dropdown-menu",
    title: "Glass Dropdown Menu",
    description: "A dropdown menu with a glass-styled floating content surface.",
    installName: "@glasscn/glass-dropdown-menu",
    importPath: "@/components/ui/glasscn/glass-dropdown-menu",
    Demo: DropdownMenuDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-3",
    usageCode: String.raw`import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GlassDropdownMenuContent } from "@/components/ui/glasscn/glass-dropdown-menu"
import { Button } from "@/components/ui/button"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Open</Button>} />
      <GlassDropdownMenuContent glassVariant="liquid" className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </GlassDropdownMenuContent>
    </DropdownMenu>
  )
}`,
    api: [
      glassVariantFor("GlassDropdownMenuContent"),
      inheritedProps("GlassDropdownMenuContent", "React.ComponentProps<typeof DropdownMenuContent>"),
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
    <GlassCombobox items={frameworks} glassVariant="liquid">
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
    <GlassSelect glassVariant="liquid">
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
      <GlassAlertDialogContent glassVariant="liquid">
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
    slug: "glass-skeleton",
    registryName: "glass-skeleton",
    title: "Glass Skeleton",
    description: "A loading placeholder with glass surface treatments.",
    installName: "@glasscn/glass-skeleton",
    importPath: "@/components/ui/glasscn/glass-skeleton",
    Demo: SkeletonDemo,
    variantsGridClassName: "md:grid-cols-2 xl:grid-cols-2",
    usageCode: String.raw`import { GlassSkeleton } from "@/components/ui/glasscn/glass-skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <GlassSkeleton glassVariant="liquid" className="size-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <GlassSkeleton glassVariant="liquid" className="h-4 w-[200px]" />
        <GlassSkeleton glassVariant="liquid" className="h-4 w-[160px]" />
      </div>
    </div>
  )
}`,
    api: [glassVariantFor("GlassSkeleton"), inheritedProps("GlassSkeleton", "React.ComponentProps<typeof Skeleton>")],
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
      <GlassSidebar glassVariant="liquid" collapsible="none">
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

export function getCatalogComponentDocs() {
  return componentDocs.filter((doc) => doc.category !== "custom");
}

export function getCatalogPreviewComponentDocs() {
  return getCatalogComponentDocs().filter((doc) => doc.slug !== "glass-command");
}

export function getCustomComponentDocs() {
  return componentDocs.filter((doc) => doc.category === "custom");
}

export function getComponentDoc(slug: string) {
  return componentDocs.find((doc) => doc.slug === slug);
}
