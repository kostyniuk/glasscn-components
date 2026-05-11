"use client";

import { useState, useEffect } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { GlassProgress } from "@/components/ui/glasscn/glass-progress";
import { type FrostGlassVariant } from "@/lib/glass-variants";

type ProgressDemoProps = { variant?: FrostGlassVariant };

function ProgressDemo({ variant = "clear" }: ProgressDemoProps) {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(33), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="progress-upload">
        <span>Upload progress</span>
        <span className="ml-auto">{progress}%</span>
      </FieldLabel>
      <GlassProgress value={progress} id="progress-upload" glassVariant={variant} className={'h-6'} />
    </Field>
  );
}

export { ProgressDemo };
