"use client";

import * as React from "react";
import { CheckIcon, CopyIcon, WandSparklesIcon } from "lucide-react";

import { type Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PackageManagerIcon } from "@/components/ui/icons/package-manager-icons";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import type { PackageManager } from "@/lib/package-manager";

export type { PackageManager };
export { convertNpmCommand } from "@/lib/package-manager";

// ─── Context ─────────────────────────────────────────────────────────────────

type PackageManagerContextValue = {
  packageManager: PackageManager;
  setPackageManager: (pm: PackageManager) => void;
};

const PackageManagerContext = React.createContext<PackageManagerContextValue>({
  packageManager: "npm",
  setPackageManager: () => { },
});

export function PackageManagerProvider({
  children,
  defaultPackageManager = "npm",
}: {
  children: React.ReactNode;
  defaultPackageManager?: PackageManager;
}) {
  const [packageManager, setPackageManagerState] =
    React.useState<PackageManager>(() => {
      if (typeof window !== "undefined") {
        return (
          (localStorage.getItem("packageManager") as PackageManager) ??
          defaultPackageManager
        );
      }
      return defaultPackageManager;
    });

  const setPackageManager = React.useCallback((pm: PackageManager) => {
    setPackageManagerState(pm);
    localStorage.setItem("packageManager", pm);
  }, []);

  return (
    <PackageManagerContext.Provider value={{ packageManager, setPackageManager }}>
      {children}
    </PackageManagerContext.Provider>
  );
}

export function usePackageManager() {
  return React.useContext(PackageManagerContext);
}

type ActiveTab = PackageManager | "prompt";

export type CodeBlockCommandProps = {
  prompt?: string;
  npm?: string;
  pnpm?: string;
  yarn?: string;
  bun?: string;
  onCopySuccess?: (text: string) => void;
  onCopyError?: (error: Error) => void;
  className?: string;
  badgeComponent?: React.ComponentType<React.ComponentProps<typeof Badge>>;
};

const PACKAGE_MANAGERS: PackageManager[] = ["pnpm", "yarn", "npm", "bun"];

export function CodeBlockCommand({
  prompt,
  npm,
  pnpm,
  yarn,
  bun,
  onCopySuccess,
  onCopyError,
  className,
  badgeComponent: BadgeComponent,
}: CodeBlockCommandProps) {
  const { packageManager, setPackageManager } = usePackageManager();
  const { state, copy } = useCopyToClipboard({ onCopySuccess, onCopyError });

  const commands: Record<PackageManager, string | undefined> = { npm, pnpm, yarn, bun };

  const availablePMs = PACKAGE_MANAGERS.filter((pm) => commands[pm] !== undefined);

  // Local tab state — "prompt" tab doesn't affect the shared PM context
  const [activeTab, setActiveTab] = React.useState<ActiveTab>(() => {
    if (availablePMs.includes(packageManager)) return packageManager;
    return availablePMs[0] ?? "npm";
  });

  // Keep active tab in sync when the shared PM context changes
  React.useEffect(() => {
    if (availablePMs.includes(packageManager)) {
      setActiveTab(packageManager);
    }
  }, [packageManager]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleTabClick(tab: ActiveTab) {
    setActiveTab(tab);
    if (tab !== "prompt") {
      setPackageManager(tab);
    }
  }

  const activeContent =
    activeTab === "prompt" ? (prompt ?? "") : (commands[activeTab] ?? "");

  return (
    <div
      data-slot="code-block-command"
      className={cn("relative overflow-hidden rounded-xl border bg-muted", className)}
    >
      <div data-slot="code-block-command-header" className="flex items-center border-b px-4">
        {BadgeComponent ? (
          <BadgeComponent
            data-slot="code-block-command-active-icon"
            variant="outline"
            className="mr-3 size-6 shrink-0 rounded-full p-0"
          >
            {activeTab === "prompt" ? (
              <WandSparklesIcon aria-hidden className="size-3.5" />
            ) : (
              <PackageManagerIcon packageManager={activeTab} className="size-3.5" />
            )}
          </BadgeComponent>
        ) : activeTab === "prompt" ? (
          <WandSparklesIcon
            aria-hidden
            data-slot="code-block-command-active-icon"
            className="mr-3 size-5 shrink-0 text-muted-foreground"
          />
        ) : (
          <PackageManagerIcon
            packageManager={activeTab}
            data-slot="code-block-command-active-icon"
            className="mr-3 size-5 shrink-0 text-muted-foreground"
          />
        )}

        {prompt && (
          <TabButton active={activeTab === "prompt"} onClick={() => handleTabClick("prompt")}>
            prompt
          </TabButton>
        )}

        {availablePMs.map((pm) => (
          <TabButton key={pm} active={activeTab === pm} onClick={() => handleTabClick(pm)}>
            {pm}
          </TabButton>
        ))}
      </div>

      <div data-slot="code-block-command-content" className="px-4 py-3 pr-12">
        <pre className="overflow-x-auto overscroll-x-contain">
          <code
            data-slot="code-block-command-code"
            className="font-mono text-sm leading-none text-foreground/80"
          >
            {activeTab !== "prompt" && <span className="select-none">$ </span>}
            {activeContent}
          </code>
        </pre>
      </div>

      <Button
        data-slot="code-block-command-copy"
        variant="ghost"
        size="icon-sm"
        className="absolute top-2 right-2"
        onClick={() => void copy(activeContent)}
        aria-label="Copy"
      >
        {state === "done" ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-slot="code-block-command-tab"
      data-active={active}
      className={cn(
        "h-10 border-b-2 border-transparent px-2 font-mono text-sm transition-colors",
        active
          ? "border-foreground text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
