import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassSeparator } from "@/components/ui/glasscn/glass-separator";
import { type FrostGlassVariant } from "@/lib/glass-variants";

const items = [
  { label: "Profile", description: "Manage your account details" },
  { label: "Notifications", description: "Configure alerts and emails" },
  { label: "Privacy", description: "Control visibility and data" },
  { label: "Billing", description: "View plans and invoices" },
];

type SeparatorDemoProps = { variant?: FrostGlassVariant };

function SeparatorDemo({ variant = "clear" }: SeparatorDemoProps) {
  return (
    <GlassCard glassVariant={variant === "liquid-refract" ? "clear" : variant} className="mx-auto w-full max-w-sm p-4">
      {items.map((item, index) => (
        <div key={item.label}>
          <div className="py-2.5">
            <p className="text-foreground text-sm font-medium">{item.label}</p>
            <p className="text-foreground/60 text-xs">{item.description}</p>
          </div>
          {index < items.length - 1 && <GlassSeparator glassVariant={variant} />}
        </div>
      ))}
    </GlassCard>
  );
}

export { SeparatorDemo };
