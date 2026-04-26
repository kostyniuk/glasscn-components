import { useState } from "react";

export type CopyState = "idle" | "done" | "error";

type UseCopyToClipboardOptions = {
  onCopySuccess?: (text: string) => void;
  onCopyError?: (error: Error) => void;
  timeout?: number;
};

export function useCopyToClipboard({ onCopySuccess, onCopyError, timeout = 2000 }: UseCopyToClipboardOptions = {}) {
  const [state, setState] = useState<CopyState>("idle");

  async function copy(text: string | (() => string)) {
    const value = typeof text === "function" ? text() : text;
    try {
      await navigator.clipboard.writeText(value);
      setState("done");
      onCopySuccess?.(value);
    } catch (err) {
      setState("error");
      onCopyError?.(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setTimeout(() => setState("idle"), timeout);
    }
  }

  return { state, copy };
}
