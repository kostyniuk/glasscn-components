import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Liquid Glass Playground",
  description: "Tune refraction and blur in an interactive draggable liquid glass playground from glasscn.",
  imageAlt: "glasscn liquid glass playground",
});

export default function PlaygroundLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
