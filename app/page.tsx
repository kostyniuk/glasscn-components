import { GlassButton } from "@/components/ui/glasscn/glass-button"
import { CardDemo } from "@/components/demo/card-demo"
import { AlertDemo } from "@/components/demo/alert-demo"

export default function Page() {
  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-6xl min-w-0 flex-col gap-10 py-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-medium tracking-tight">
            Glass Components
          </h1>
          <p className="text-base leading-7 text-foreground/90">
            This demo shows reusable glass button and card components with three
            visual variants.
          </p>
        </div>

        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-xl font-medium tracking-tight">
              Glass Buttons
            </h2>
            <p className="text-sm leading-6 text-foreground">
              Compare the <strong>clear</strong>, <strong>frosted</strong>, and{" "}
              <strong>subtle</strong> styles below in both light and dark mode.
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
            <h2 className="text-xl font-medium tracking-tight">Glass Cards</h2>
            <p className="text-sm leading-6 text-foreground">
              The same three variants are applied to a reusable <code>CardDemo</code>{" "}
              component backed by <code>GlassCard</code>.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <CardDemo variant="clear" />
            <CardDemo variant="frosted" />
            <CardDemo variant="subtle" />
          </div>
        </section>
        <AlertDemo />
      </div>
    </div>
  )
}
