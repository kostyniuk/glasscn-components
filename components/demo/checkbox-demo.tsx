"use client";

import * as React from "react";

import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { GlassCheckbox } from "@/components/ui/glasscn/glass-checkbox";
import { FrostGlassVariant } from "@/components/ui/glasscn/glass-variants";

type CheckboxDemoProps = { variant?: FrostGlassVariant };

function CheckboxDemo({ variant = "clear" }: CheckboxDemoProps) {
  const [checked, setChecked] = React.useState(false);
  const checkboxId = React.useId();

  return (
    <FieldGroup className="mx-auto w-full max-w-sm rounded-2xl border border-white/20 bg-white/20 p-4 shadow-[0_12px_40px_rgba(255,255,255,0.08)] backdrop-blur-sm dark:border-white/30 dark:bg-black/30">
      <Field orientation="horizontal">
        <GlassCheckbox
          id={checkboxId}
          name={checkboxId}
          variant={variant}
          checked={checked}
          onCheckedChange={setChecked}
        />
        <FieldContent>
          <FieldLabel htmlFor={checkboxId}>Enable layered glass surfaces</FieldLabel>
          <FieldDescription className={"text-foreground/80"}>
            Adds the frosted treatment to nested panels and interactive controls for a denser glassmorphism look.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
}

export { CheckboxDemo };
