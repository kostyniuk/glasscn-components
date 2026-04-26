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
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/20 bg-white/20 p-4 shadow-[0_12px_40px_rgba(255,255,255,0.08)] backdrop-blur-sm dark:border-white/30 dark:bg-black/30">
      {items.map((item, index) => (
        <div key={item.label}>
          <div className="py-2.5">
            <p className="text-foreground text-sm font-medium">{item.label}</p>
            <p className="text-foreground/60 text-xs">{item.description}</p>
          </div>
          {index < items.length - 1 && <GlassSeparator glassVariant={variant} />}
        </div>
      ))}
    </div>
  );
}

export { SeparatorDemo };
