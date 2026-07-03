import type { SVGProps } from "react";

import { GlassIcon } from "@/components/ui/glasscn/glass-icon";
import type { FrostGlassVariant } from "@/lib/glass-variants";

function AirplayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.75 17.25H17.25C18.3546 17.25 19.25 16.3546 19.25 15.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V15.25C4.75 16.3546 5.64543 17.25 6.75 17.25H7.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 15.75L9 19.25H15L12 15.75Z"
      />
    </svg>
  );
}

function CopyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"
      />
      <rect
        width="10.5"
        height="10.5"
        x="8.75"
        y="8.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        rx="2"
      />
    </svg>
  );
}

function PhotoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.75 16L7.49619 12.5067C8.2749 11.5161 9.76453 11.4837 10.5856 12.4395L13 15.25M10.915 12.823C11.9522 11.5037 13.3973 9.63455 13.4914 9.51294C13.4947 9.50859 13.4979 9.50448 13.5013 9.50017C14.2815 8.51598 15.7663 8.48581 16.5856 9.43947L19 12.25M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25Z"
      />
    </svg>
  );
}

function ChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
      />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.75 15.25V9.75" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.25 15.25V9.75"
      />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15.25V12.75" />
    </svg>
  );
}

export function GlassIconDemo({ variant = "liquid-refract" }: { variant?: FrostGlassVariant }) {
  return (
    <div className="flex items-end gap-4">
      <GlassIcon glassVariant={variant} size="sm" aria-label="Photo">
        <PhotoIcon />
      </GlassIcon>
      <GlassIcon glassVariant={variant} size="md" aria-label="Chart">
        <ChartIcon />
      </GlassIcon>
      <GlassIcon glassVariant={variant} size="lg" aria-label="Copy">
        <CopyIcon />
      </GlassIcon>
      <GlassIcon glassVariant={variant} size="xl" aria-label="AirPlay">
        <AirplayIcon />
      </GlassIcon>
    </div>
  );
}
