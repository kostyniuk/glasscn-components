"use client";

import { CheckIcon, CircleXIcon, CopyIcon } from "lucide-react";
import type { HTMLMotionProps, Variants } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import type { CopyState } from "@/hooks/use-copy-to-clipboard";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export const motionIconVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, filter: "blur(2px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.8 },
};

export const motionIconProps: HTMLMotionProps<"span"> = {
  variants: motionIconVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: { duration: 0.25, ease: "easeOut" },
};

export type CopyStateIconProps = {
  state: CopyState;
  idleIcon?: React.ReactNode;
  doneIcon?: React.ReactNode;
  errorIcon?: React.ReactNode;
};

export function CopyStateIcon({ state, idleIcon, doneIcon, errorIcon }: CopyStateIconProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {state === "idle" ? (
        <motion.span key="idle" {...motionIconProps}>
          {idleIcon ?? <CopyIcon />}
        </motion.span>
      ) : state === "done" ? (
        <motion.span key="done" {...motionIconProps}>
          {doneIcon ?? <CheckIcon strokeWidth={3} color="green" />}
        </motion.span>
      ) : state === "error" ? (
        <motion.span key="error" {...motionIconProps}>
          {errorIcon ?? <CircleXIcon />}
        </motion.span>
      ) : null}
    </AnimatePresence>
  );
}

export type CopyButtonProps = ComponentProps<typeof Button> & {
  text: string | (() => string);
  onCopySuccess?: (text: string) => void;
  onCopyError?: (error: Error) => void;
} & Pick<CopyStateIconProps, "idleIcon" | "doneIcon" | "errorIcon">;

export function CopyButton({
  size = "icon",
  variant = "ghost",
  children,
  text,
  idleIcon,
  doneIcon,
  errorIcon,
  onClick,
  onCopySuccess,
  onCopyError,
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({ onCopySuccess, onCopyError });

  return (
    <Button
      size={size}
      variant={variant}
      onClick={(e) => {
        void copy(text);
        onClick?.(e);
      }}
      aria-label="Copy"
      {...props}
    >
      <CopyStateIcon state={state} idleIcon={idleIcon} doneIcon={doneIcon} errorIcon={errorIcon} />
      {children}
    </Button>
  );
}
