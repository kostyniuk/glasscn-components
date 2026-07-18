"use client";

import { SettingsIcon, UserPlusIcon } from "lucide-react";
import { useMemo, useRef, useState } from "react";

import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassTour, type GlassTourStep } from "@/components/ui/glasscn/glass-tour";

const stats = [
  { label: "Revenue", value: "$48,204", delta: "+12.4%", good: true },
  { label: "Active users", value: "3,821", delta: "+4.1%", good: true },
  { label: "Churn", value: "1.8%", delta: "-0.3%", good: true },
];

const activity = [
  { initials: "JM", name: "Jordan Miles", action: "upgraded to Pro", time: "2m ago" },
  { initials: "AK", name: "Ana Kim", action: "invited a teammate", time: "18m ago" },
  { initials: "RT", name: "Ravi Thomas", action: "exported a report", time: "1h ago" },
  { initials: "SC", name: "Sofia Costa", action: "created a workspace", time: "3h ago" },
];

const stepMeta = [
  {
    tour: "stats",
    title: "Your metrics at a glance",
    content: "Revenue, active users, and churn update in real time — no configuration needed.",
    placement: "bottom",
  },
  {
    tour: "invite",
    title: "Bring your team",
    content: "Invite teammates to collaborate on dashboards and share access in one click.",
    placement: "bottom",
  },
  {
    tour: "activity",
    title: "Stay in the loop",
    content: "Every upgrade, invite, and export shows up here so nothing slips by.",
    placement: "top",
  },
  {
    tour: "settings",
    title: "Make it yours",
    content: "Tune notifications, billing, and permissions from settings whenever you need to.",
    placement: "left",
  },
] as const;

function GlassTourDemo() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Target via getters scoped to this instance's root — the docs page mounts
  // the demo twice (preview + variants grid), so global selectors would
  // always resolve to the first instance.
  const steps = useMemo<GlassTourStep[]>(
    () =>
      stepMeta.map(({ tour, title, content, placement }) => ({
        target: () => rootRef.current?.querySelector<HTMLElement>(`[data-tour="${tour}"]`) ?? null,
        title,
        content,
        placement,
      })),
    [],
  );

  return (
    <div ref={rootRef} className="w-full max-w-2xl">
      <div className="mb-4 flex justify-center">
        <GlassButton glassVariant="liquid-refract" onClick={() => setOpen(true)}>
          Start tour
        </GlassButton>
      </div>

      {/* Deliberately plain, non-glass mock UI — the tour is the wow moment. */}
      <div className="rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Acme Analytics</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              data-tour="invite"
              className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              <UserPlusIcon className="size-3.5" />
              Invite member
            </button>
            <button
              type="button"
              data-tour="settings"
              aria-label="Settings"
              className="inline-flex size-7 items-center justify-center rounded-md border text-neutral-600 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <SettingsIcon className="size-3.5" />
            </button>
          </div>
        </div>

        <div data-tour="stats" className="mt-4 grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{stat.label}</p>
              <p className="mt-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">{stat.value}</p>
              <p
                className={
                  stat.good
                    ? "mt-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400"
                    : "mt-0.5 text-[11px] font-medium text-red-600 dark:text-red-400"
                }
              >
                {stat.delta}
              </p>
            </div>
          ))}
        </div>

        <div data-tour="activity" className="mt-4 rounded-lg border dark:border-neutral-800">
          <p className="border-b px-3 py-2 text-[11px] font-medium text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            Recent activity
          </p>
          <ul className="divide-y dark:divide-neutral-800">
            {activity.map((item) => (
              <li key={item.name} className="flex items-center gap-2.5 px-3 py-2">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  {item.initials}
                </span>
                <p className="min-w-0 flex-1 truncate text-xs text-neutral-700 dark:text-neutral-300">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{item.name}</span> {item.action}
                </p>
                <span className="shrink-0 text-[11px] text-neutral-400 dark:text-neutral-500">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <GlassTour steps={steps} open={open} onOpenChange={setOpen} advanceOnTargetClick={false} />
    </div>
  );
}

export { GlassTourDemo };
