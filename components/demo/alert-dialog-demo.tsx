import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { type FrostGlassVariant } from "@/lib/glass-variants";

import { GlassAlertDialogContent } from "../ui/glasscn/glass-alert-dialog";

type AlertDialogDemoProps = { variant?: FrostGlassVariant };

export function AlertDialogDemo({ variant = "clear" }: AlertDialogDemoProps) {
  return (
    <div className="flex justify-start">
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <GlassButton glassVariant={variant} className="text-black dark:text-white">
              Show Dialog
            </GlassButton>
          }
        />
        <GlassAlertDialogContent glassVariant={variant}>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className={"text-foreground/80"}>
              This action cannot be undone. This will permanently delete your account from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="bg-muted/5 border-white/15 supports-backdrop-filter:backdrop-blur-md dark:border-white/10">
            <AlertDialogCancel render={<GlassButton glassVariant={variant} className="text-black dark:text-white" />}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </GlassAlertDialogContent>
      </AlertDialog>
    </div>
  );
}
