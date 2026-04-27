"use client";

import { GemSmoke, type GemSmokeProps } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

type LiquidTextProps = { text: string; fontSize?: number; padding?: number; width?: number; height?: number } & Omit<
  GemSmokeProps,
  "width" | "height"
>;

type Box = { w: number; h: number; ascent: number };

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function LiquidText({ text, fontSize = 82, padding = 0, width, height, ...shaderProps }: LiquidTextProps) {
  const [box, setBox] = useState<Box | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.font = `900 ${fontSize}px sans-serif`;
    const metrics = ctx.measureText(text);

    const ascent = metrics.actualBoundingBoxAscent;
    const descent = metrics.actualBoundingBoxDescent;
    const measuredW = Math.ceil(metrics.width) + padding * 2;
    const measuredH = Math.ceil(ascent + descent) + padding * 2;
    const measuredAscent = ascent + padding;

    const finalW = width ?? measuredW;
    const finalH = height ?? measuredH;

    setBox({ w: finalW, h: finalH, ascent: measuredAscent + (finalH - measuredH) / 2 });
  }, [text, fontSize, padding, width, height]);

  if (!box) return null;

  const escapedText = escapeXml(text);
  const svgMask = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${box.w} ${box.h}">
      <text
        x="50%" y="${box.ascent}"
        text-anchor="middle"
        dominant-baseline="alphabetic"
        font-size="${fontSize}"
        font-weight="900"
        font-family="sans-serif"
        fill="white"
      >${escapedText}</text>
    </svg>
  `;
  const maskUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgMask)}")`;

  return (
    <div
      style={{
        width: box.w,
        height: box.h,
        WebkitMaskImage: maskUrl,
        maskImage: maskUrl,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
      }}
    >
      <GemSmoke
        width={box.w}
        height={box.h}
        image="https://shaders.paper.design/images/logos/diamond.svg"
        colors={["#fff"]}
        colorBack="#f0efea"
        colorInner="#333333"
        shape="metaballs"
        innerDistortion={0.5}
        outerDistortion={0}
        outerGlow={0.51}
        innerGlow={1}
        offset={0}
        angle={152}
        size={0.35}
        speed={1}
        scale={4}
        {...shaderProps}
      />
    </div>
  );
}
