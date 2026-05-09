import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liquid Glass Playground",
  description: "Tune refraction and blur in an interactive draggable liquid glass playground from glasscn.",
  openGraph: {
    title: "Liquid Glass Playground | glasscn",
    description: "Tune refraction and blur in an interactive draggable liquid glass playground from glasscn.",
  },
  twitter: {
    title: "Liquid Glass Playground | glasscn",
    description: "Tune refraction and blur in an interactive draggable liquid glass playground from glasscn.",
  },
};

export default function PlaygroundLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
