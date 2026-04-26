import React from "react";

import { AlertDemo } from "@/components/demo/alert-demo";
import { AlertDialogDemo } from "@/components/demo/alert-dialog-demo";
import { CalendarDemo } from "@/components/demo/calendar-demo";
import { CardDemo } from "@/components/demo/card-demo";
import { CheckboxDemo } from "@/components/demo/checkbox-demo";
import { ComboboxDemo } from "@/components/demo/combobox-demo";
import { SelectDemo } from "@/components/demo/select-demo";
import { SeparatorDemo } from "@/components/demo/separator-demo";
import { SidebarDemo } from "@/components/demo/sidebar-demo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlockCommand, PackageManagerProvider } from "@/components/ui/code-block-command";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCodeBlockCommand } from "@/components/ui/glasscn/glass-code-block-command";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <CardTitle className="text-xl">{children}</CardTitle>;
}

function SectionDescription({ children }: { children: React.ReactNode }) {
  return <CardDescription className="text-foreground text-sm leading-6">{children}</CardDescription>;
}

export default function Page() {
  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-6xl min-w-0 flex-col gap-10 py-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-medium tracking-tight">Glass Components</h1>
          <p className="text-foreground/90 text-base leading-7">
            A small set of reusable UI primitives with glassmorphism styling, each available in clear, frosted, and
            subtle variants.
          </p>
        </div>

        <Card id="button" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Buttons</SectionTitle>
            <SectionDescription>
              Buttons for primary actions, secondary actions, and compact controls, shown here across the three glass
              surface treatments.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <GlassButton glassVariant="clear">Clear</GlassButton>
              <GlassButton glassVariant="frosted">Frosted</GlassButton>
              <GlassButton glassVariant="subtle">Subtle</GlassButton>
            </div>
          </CardContent>
        </Card>

        <Card id="badge" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Badges</SectionTitle>
            <SectionDescription>
              Badges for compact status labels and metadata, using the same clear, frosted, and subtle glass treatments
              as the rest of the set.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <GlassBadge glassVariant="clear">Clear</GlassBadge>
              <GlassBadge glassVariant="frosted">Frosted</GlassBadge>
              <GlassBadge glassVariant="subtle">Subtle</GlassBadge>
            </div>
          </CardContent>
        </Card>

        <Card id="separator" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Separators</SectionTitle>
            <SectionDescription>
              Horizontal dividers with glass surface treatment, separating sections of content while staying consistent
              with the clear, frosted, and subtle glass variants.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-3">
              <SeparatorDemo variant="clear" />
              <SeparatorDemo variant="frosted" />
              <SeparatorDemo variant="subtle" />
            </div>
          </CardContent>
        </Card>

        <Card id="card" variant="outline" className="pb-4!">
          <CardHeader>
            <SectionTitle>Glass Cards</SectionTitle>
            <SectionDescription>
              Cards for grouping related content, inputs, and actions inside a reusable container with the same glass
              variants.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 lg:grid-cols-3">
              <CardDemo variant="clear" />
              <CardDemo variant="frosted" />
              <CardDemo variant="subtle" />
            </div>
          </CardContent>
        </Card>

        <Card id="checkbox" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Checkboxes</SectionTitle>
            <SectionDescription>
              Checkboxes for compact boolean choices, using the same clear, frosted, and subtle glass treatments.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-3">
              <CheckboxDemo variant="clear" />
              <CheckboxDemo variant="frosted" />
              <CheckboxDemo variant="subtle" />
            </div>
          </CardContent>
        </Card>

        <Card id="combobox" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Comboboxes</SectionTitle>
            <SectionDescription>
              Comboboxes for searchable selection flows, with glass treatment applied to both the input surface and the
              popup list.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-3">
              <ComboboxDemo variant="clear" />
              <ComboboxDemo variant="frosted" />
              <ComboboxDemo variant="subtle" />
            </div>
          </CardContent>
        </Card>

        <Card id="select" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Selects</SectionTitle>
            <SectionDescription>
              Custom select menus with glass treatment applied to both the trigger surface and the popup content.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-3">
              <SelectDemo variant="clear" />
              <SelectDemo variant="frosted" />
              <SelectDemo variant="subtle" />
            </div>
          </CardContent>
        </Card>

        <Card id="sidebar" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Sidebars</SectionTitle>
            <SectionDescription>
              Compound side navigation with glass treatment applied to the main shell, search field, menu states, and
              supporting surfaces.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-3">
              <SidebarDemo variant="clear" />
              <SidebarDemo variant="frosted" />
              <SidebarDemo variant="subtle" />
            </div>
          </CardContent>
        </Card>

        <Card id="calendar" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Calendars</SectionTitle>
            <SectionDescription>
              Calendars for date selection and scheduling flows, using the same clear, frosted, and subtle glass surface
              treatments.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 lg:grid-cols-3">
              <CalendarDemo variant="clear" />
              <CalendarDemo variant="frosted" />
              <CalendarDemo variant="subtle" />
            </div>
          </CardContent>
        </Card>

        <Card id="alert" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Alerts</SectionTitle>
            <SectionDescription>
              Alerts for status messages and inline feedback, styled with the same glass variants to stay consistent
              with the rest of the system.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <AlertDemo variant="clear" />
              <AlertDemo variant="frosted" />
              <AlertDemo variant="subtle" />
            </div>
          </CardContent>
        </Card>

        <Card id="code-block-command" variant="outline">
          <CardHeader>
            <SectionTitle>Code Block Command</SectionTitle>
            <SectionDescription>A tabbed command block for displaying package manager commands.</SectionDescription>
          </CardHeader>
          <CardContent>
            <PackageManagerProvider>
              <div className="flex flex-col gap-3">
                <CodeBlockCommand
                  prompt="Install Tailwind CSS and its Vite plugin"
                  npm="npm install tailwindcss @tailwindcss/vite"
                  pnpm="pnpm add tailwindcss @tailwindcss/vite"
                  yarn="yarn add tailwindcss @tailwindcss/vite"
                  bun="bun add tailwindcss @tailwindcss/vite"
                />
                <GlassCodeBlockCommand
                  glassVariant="frosted"
                  prompt="Install Tailwind CSS and its Vite plugin"
                  npm="npm install tailwindcss @tailwindcss/vite"
                  pnpm="pnpm add tailwindcss @tailwindcss/vite"
                  yarn="yarn add tailwindcss @tailwindcss/vite"
                  bun="bun add tailwindcss @tailwindcss/vite"
                />
                <GlassCodeBlockCommand
                  glassVariant="clear"
                  prompt="Install Tailwind CSS and its Vite plugin"
                  npm="npm install tailwindcss @tailwindcss/vite"
                  pnpm="pnpm add tailwindcss @tailwindcss/vite"
                  yarn="yarn add tailwindcss @tailwindcss/vite"
                  bun="bun add tailwindcss @tailwindcss/vite"
                />
                <GlassCodeBlockCommand
                  glassVariant="subtle"
                  prompt="Install Tailwind CSS and its Vite plugin"
                  npm="npm install tailwindcss @tailwindcss/vite"
                  pnpm="pnpm add tailwindcss @tailwindcss/vite"
                  yarn="yarn add tailwindcss @tailwindcss/vite"
                  bun="bun add tailwindcss @tailwindcss/vite"
                />
              </div>
            </PackageManagerProvider>
          </CardContent>
        </Card>

        <Card id="alert-dialog" variant="outline">
          <CardHeader>
            <SectionTitle>Glass Alert Dialogs</SectionTitle>
            <SectionDescription>
              Modal confirmation dialogs with the same clear, frosted, and subtle glass treatments applied to the popup
              surface and actions.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-3">
              <AlertDialogDemo variant="clear" />
              <AlertDialogDemo variant="frosted" />
              <AlertDialogDemo variant="subtle" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
