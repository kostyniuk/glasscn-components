import { CheckCircle2Icon } from "lucide-react";

import { AlertDescription, AlertTitle } from "@/components/ui/alert";
import { GlassAlert } from "@/components/ui/glasscn/glass-alert";
import { type FrostGlassVariant } from "@/components/ui/glasscn/glass-variants";

type AlertDemoProps = { variant?: FrostGlassVariant };

export function AlertDemo({ variant = "clear" }: AlertDemoProps) {
  return (
    <GlassAlert variant={variant} className="w-full max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Payment successful</AlertTitle>
      <AlertDescription className={"text-foreground/80"}>
        Your payment of $29.99 has been processed. A receipt has been sent to your email address.
      </AlertDescription>
    </GlassAlert>
  );
}
