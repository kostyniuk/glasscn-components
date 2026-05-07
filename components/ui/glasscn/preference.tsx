import type { ComponentType, CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";
import { ItemDescription, ItemTitle } from "@/components/ui/item";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type PreferenceIconProps = { className?: string };

type PreferenceIcon = ComponentType<PreferenceIconProps>;

type PreferenceItemProps = {
  text: string;
  description?: string;
  Icon: PreferenceIcon;
  className: string;
  weight?: number;
};

type PreferenceGroupProps = { title: string; description: string; items: PreferenceItemProps[] };

function PreferenceItem({ className, description, Icon, text, weight = 1 }: PreferenceItemProps) {
  return (
    <div
      className={cn(
        "flex flex-(--preference-weight) items-center justify-center overflow-hidden transition-[filter,opacity] duration-300 group-hover/preference:not-[&:hover]:opacity-50 group-hover/preference:not-[&:hover]:saturate-50",
        className,
      )}
      style={{ "--preference-weight": weight } as CSSProperties}
      aria-label={text}
    >
      <Tooltip>
        <TooltipTrigger
          render={
            <Badge variant="secondary" className="size-7 rounded-full p-0 [&>svg]:size-4!">
              <Icon className="size-full" />
            </Badge>
          }
        />
        <TooltipContent className="flex max-w-48 flex-col items-start gap-0.5 px-3 py-2">
          <ItemTitle className="text-background text-xs">{text}</ItemTitle>
          {description ? <ItemDescription className="text-background/70 text-xs">{description}</ItemDescription> : null}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function PreferenceGroup({ title, description, items }: PreferenceGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </div>
      <div className="group/preference flex h-10 overflow-hidden rounded-full">
        {items.map((preference, i) => (
          <PreferenceItem key={i} {...preference} />
        ))}
      </div>
    </div>
  );
}

export type { PreferenceGroupProps, PreferenceIcon, PreferenceIconProps, PreferenceItemProps };
export { PreferenceGroup };
