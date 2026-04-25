import { GlassButton } from "@/components/ui/glasscn/glass-button"
import { GlassBadge } from "@/components/ui/glasscn/glass-badge"
import { CalendarDemo } from "@/components/demo/calendar-demo"
import { CheckboxDemo } from "@/components/demo/checkbox-demo"
import { CardDemo } from "@/components/demo/card-demo"
import { AlertDemo } from "@/components/demo/alert-demo"
import { AlertDialogDemo } from "@/components/demo/alert-dialog-demo"

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

        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-xl font-medium tracking-tight">
              Glass Buttons
            </h2>
            <p className="text-sm leading-6 text-foreground">
              Buttons for primary actions, secondary actions, and compact
              controls, shown here across the three glass surface treatments.
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <GlassButton variant="clear">Clear</GlassButton>
            <GlassButton variant="frosted">Frosted</GlassButton>
            <GlassButton variant="subtle">Subtle</GlassButton>
          </div>
        </section>

        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-xl font-medium tracking-tight">Glass Badges</h2>
            <p className="text-sm leading-6 text-foreground">
              Badges for compact status labels and metadata, using the same
              clear, frosted, and subtle glass treatments as the rest of the
              set.
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <GlassBadge variant="clear">Clear</GlassBadge>
            <GlassBadge variant="frosted">Frosted</GlassBadge>
            <GlassBadge variant="subtle">Subtle</GlassBadge>
          </div>
        </section>

        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-xl font-medium tracking-tight">Glass Cards</h2>
            <p className="text-sm leading-6 text-foreground">
              Cards for grouping related content, inputs, and actions inside a
              reusable container with the same glass variants.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <CardDemo variant="clear" />
            <CardDemo variant="frosted" />
            <CardDemo variant="subtle" />
          </div>
        </section>

        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-xl font-medium tracking-tight">
              Glass Checkboxes
            </h2>
            <p className="text-sm leading-6 text-foreground">
              Checkboxes for compact boolean choices, using the same clear,
              frosted, and subtle glass treatments.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <CheckboxDemo variant="clear" />
            <CheckboxDemo variant="frosted" />
            <CheckboxDemo variant="subtle" />
          </div>
        </section>

        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-xl font-medium tracking-tight">
              Glass Calendars
            </h2>
            <p className="text-sm leading-6 text-foreground">
              Calendars for date selection and scheduling flows, using the same
              clear, frosted, and subtle glass surface treatments.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <CalendarDemo variant="clear" />
            <CalendarDemo variant="frosted" />
            <CalendarDemo variant="subtle" />
          </div>
        </section>

        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-xl font-medium tracking-tight">Glass Alerts</h2>
            <p className="text-sm leading-6 text-foreground">
              Alerts for status messages and inline feedback, styled with the
              same glass variants to stay consistent with the rest of the
              system.
            </p>
          </div>
          <div className="grid gap-4">
            <AlertDemo variant="clear" />
            <AlertDemo variant="frosted" />
            <AlertDemo variant="subtle" />
          </div>
        </section>

        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-xl font-medium tracking-tight">
              Glass Alert Dialogs
            </h2>
            <p className="text-sm leading-6 text-foreground">
              Modal confirmation dialogs with the same clear, frosted, and
              subtle glass treatments applied to the popup surface and actions.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <AlertDialogDemo variant="clear" />
            <AlertDialogDemo variant="frosted" />
            <AlertDialogDemo variant="subtle" />
          </div>
        </section>
      </div>
    </div>
  )
}
