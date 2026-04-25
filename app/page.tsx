import { GlassButton } from "@/components/ui/glasscn/glass-button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6 justify-center items-center">
      <div className="flex max-w-md min-w-0 flex-col gap-4">
        <div className="space-y-3">
          <h1 className="text-3xl font-medium tracking-tight">
            Glass Button Component
          </h1>
          <p className="text-base leading-7 text-foreground/90">
            This demo shows a reusable glass button component with three visual
            variants.
          </p>
          <p className="text-sm leading-6 text-foreground">
            Compare the <strong>clear</strong>, <strong>frosted</strong>, and{" "}
            <strong>subtle</strong> styles below in both light and dark mode.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <GlassButton variant="clear">Clear</GlassButton>
            <GlassButton variant="frosted">Frosted</GlassButton>
            <GlassButton variant="subtle">Subtle</GlassButton>
          </div>
        </div>
      </div>
    </div>
  )
}
