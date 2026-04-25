import React from "react"
import { GlassButton } from "@/components/ui/glasscn/glass-button"
import { GlassBadge } from "@/components/ui/glasscn/glass-badge"
import { CalendarDemo } from "@/components/demo/calendar-demo"
import { CheckboxDemo } from "@/components/demo/checkbox-demo"
import { ComboboxDemo } from "@/components/demo/combobox-demo"
import { CardDemo } from "@/components/demo/card-demo"
import { SelectDemo } from "@/components/demo/select-demo"
import { AlertDemo } from "@/components/demo/alert-demo"
import { AlertDialogDemo } from "@/components/demo/alert-dialog-demo"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <CardTitle className="text-xl">{children}</CardTitle>
}

function SectionDescription({ children }: { children: React.ReactNode }) {
  return (
    <CardDescription className="text-sm leading-6 text-foreground">
      {children}
    </CardDescription>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-6xl min-w-0 flex-col gap-10 py-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-medium tracking-tight">
            Glass Components
          </h1>
          <p className="text-base leading-7 text-foreground/90">
            A small set of reusable UI primitives with glassmorphism styling,
            each available in clear, frosted, and subtle variants.
          </p>
        </div>

        <Card variant="outline">
          <CardHeader>
            <SectionTitle>Glass Buttons</SectionTitle>
            <SectionDescription>
              Buttons for primary actions, secondary actions, and compact
              controls, shown here across the three glass surface treatments.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <GlassButton variant="clear">Clear</GlassButton>
              <GlassButton variant="frosted">Frosted</GlassButton>
              <GlassButton variant="subtle">Subtle</GlassButton>
            </div>
          </CardContent>
        </Card>

        <Card variant="outline">
          <CardHeader>
            <SectionTitle>Glass Badges</SectionTitle>
            <SectionDescription>
              Badges for compact status labels and metadata, using the same
              clear, frosted, and subtle glass treatments as the rest of the
              set.
            </SectionDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <GlassBadge variant="clear">Clear</GlassBadge>
              <GlassBadge variant="frosted">Frosted</GlassBadge>
              <GlassBadge variant="subtle">Subtle</GlassBadge>
            </div>
          </CardContent>
        </Card>

        <Card variant="outline">
          <CardHeader>
            <SectionTitle>Glass Cards</SectionTitle>
            <SectionDescription>
              Cards for grouping related content, inputs, and actions inside a
              reusable container with the same glass variants.
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

        <Card variant="outline">
          <CardHeader>
            <SectionTitle>Glass Checkboxes</SectionTitle>
            <SectionDescription>
              Checkboxes for compact boolean choices, using the same clear,
              frosted, and subtle glass treatments.
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

        <Card variant="outline">
          <CardHeader>
            <SectionTitle>Glass Comboboxes</SectionTitle>
            <SectionDescription>
              Comboboxes for searchable selection flows, with glass treatment
              applied to both the input surface and the popup list.
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

        <Card variant="outline">
          <CardHeader>
            <SectionTitle>Glass Selects</SectionTitle>
            <SectionDescription>
              Custom select menus with glass treatment applied to both the
              trigger surface and the popup content.
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

        <Card variant="outline">
          <CardHeader>
            <SectionTitle>Glass Calendars</SectionTitle>
            <SectionDescription>
              Calendars for date selection and scheduling flows, using the same
              clear, frosted, and subtle glass surface treatments.
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

        <Card variant="outline">
          <CardHeader>
            <SectionTitle>Glass Alerts</SectionTitle>
            <SectionDescription>
              Alerts for status messages and inline feedback, styled with the
              same glass variants to stay consistent with the rest of the
              system.
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

        <Card variant="outline">
          <CardHeader>
            <SectionTitle>Glass Alert Dialogs</SectionTitle>
            <SectionDescription>
              Modal confirmation dialogs with the same clear, frosted, and
              subtle glass treatments applied to the popup surface and actions.
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
  )
}
