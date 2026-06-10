"use client";

import * as React from "react";

import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassCheckbox } from "@/components/ui/glasscn/glass-checkbox";
import { FrostGlassVariant } from "@/lib/glass-variants";

type CheckboxDemoProps = { variant?: FrostGlassVariant };

function CheckboxDemo({ variant = "clear" }: CheckboxDemoProps) {
  const [checked, setChecked] = React.useState(false);
  const checkboxId = React.useId();

  return (
    <GlassCard
      glassVariant={variant}
      className="mx-auto w-full max-w-sm p-4"
      surfaceClassName="mx-auto w-full max-w-sm"
    >
      <FieldGroup>
        <Field orientation="horizontal">
          <GlassCheckbox
            id={checkboxId}
            name={checkboxId}
            glassVariant={variant}
            checked={checked}
            onCheckedChange={setChecked}
          />
          <FieldContent>
            <FieldLabel htmlFor={checkboxId}>Enable layered glass surfaces</FieldLabel>
            <FieldDescription className="text-help-foreground">
              Adds the frosted treatment to nested panels and interactive controls for a denser glassmorphism look.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </GlassCard>
  );
}

export { CheckboxDemo };
