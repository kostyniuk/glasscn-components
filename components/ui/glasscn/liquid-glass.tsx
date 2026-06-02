"use client";

import { type CSSProperties, type HTMLAttributes, forwardRef, useEffect, useId, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const displacementMapCache = new Map<string, string>();

export type LiquidGlassProps = HTMLAttributes<HTMLDivElement> & {
  /** Extra blur mixed into the backdrop-filter after the SVG refraction. */
  blur?: number;
  /** SVG displacement strength. Higher values bend the sampled backdrop more. */
  refraction?: number;
  /** Pixel size of the generated displacement texture. 320 is a good quality/perf default. */
  mapSize?: number;
  /** Fraction of the radius used as the curved edge where most refraction happens. */
  bezel?: number;
};

export const LiquidGlass = forwardRef<HTMLDivElement, LiquidGlassProps>(function LiquidGlass(
  // { blur = 1, refraction = 72, mapSize = 320, bezel = 0.34, className, style, children, ...props },
  { blur = 2, refraction = 15, mapSize = 320, bezel = 0.34, className, style, children, ...props },
  ref,
) {
  const rawId = useId();
  const filterId = useMemo(() => `liquid-glass-${rawId.replace(/:/g, "")}`, [rawId]);
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    setMapUrl(createDisplacementMap(mapSize, bezel));
  }, [bezel, mapSize]);

  return (
    <>
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-full border border-black/10 bg-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.5),inset_0_-1px_0_0_rgba(0,0,0,0.05)] dark:border-white/20 dark:shadow-[0_18px_60px_rgba(0,0,0,0.36),inset_0_0_0_1px_rgba(255,255,255,0.035),inset_-9px_-7px_18px_rgba(0,0,0,0.48)]",
          className,
        )}
        style={
          {
            ...style,
            backdropFilter: `url(#${filterId}) blur(${blur}px) saturate(1.28)`,
            WebkitBackdropFilter: `url(#${filterId}) blur(${blur}px) saturate(1.28)`,
          } as CSSProperties
        }
        {...props}
      >
        {children}
      </div>

      <svg className="absolute size-0 overflow-hidden" aria-hidden>
        <filter id={filterId} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          {mapUrl ? (
            <feImage
              href={mapUrl}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="displacementMap"
            />
          ) : null}
          <feDisplacementMap
            in="SourceGraphic"
            in2="displacementMap"
            scale={refraction}
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="0.15" />
        </filter>
      </svg>
    </>
  );
});

function createDisplacementMap(size: number, bezel: number) {
  const cacheKey = `${size}:${bezel}`;
  const cachedMap = displacementMapCache.get(cacheKey);

  if (cachedMap !== undefined) {
    return cachedMap;
  }

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return "";

  const image = ctx.createImageData(size, size);
  const data = image.data;
  const center = (size - 1) / 2;

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const nx = (x - center) / center;
      const ny = (y - center) / center;
      const radius = Math.hypot(nx, ny);
      const index = (y * size + x) * 4;

      if (radius > 1) {
        data[index] = 128;
        data[index + 1] = 128;
        data[index + 2] = 128;
        data[index + 3] = 255;
        continue;
      }

      const edgeDistance = 1 - radius;
      const bezelT = clamp(edgeDistance / bezel, 0, 1);
      const surface = convexSquircle(bezelT);
      const fadeToCenter = 1 - smootherstep(0.55, 1, edgeDistance);
      const rimKick = Math.sin(bezelT * Math.PI) * 0.52;
      const magnitude = clamp((1 - surface) * 0.55 + rimKick, 0, 1) * fadeToCenter;
      const direction = radius === 0 ? { x: 0, y: 0 } : { x: nx / radius, y: ny / radius };

      data[index] = Math.round(128 + direction.x * magnitude * 127);
      data[index + 1] = Math.round(128 + direction.y * magnitude * 127);
      data[index + 2] = 128;
      data[index + 3] = 255;
    }
  }

  ctx.putImageData(image, 0, 0);

  const mapUrl = canvas.toDataURL("image/png");
  displacementMapCache.set(cacheKey, mapUrl);

  return mapUrl;
}

function convexSquircle(x: number) {
  return Math.pow(1 - Math.pow(1 - x, 4), 0.25);
}

function smootherstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
