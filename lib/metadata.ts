import type { Metadata } from "next";

export const SITE_URL = "https://glasscn-components.vercel.app";

export const SITE_DESCRIPTION =
  "Apple-inspired liquid glass components for shadcn/ui, with registry-ready primitives, live previews, and install commands.";

export const SOCIAL_CARD_IMAGE = {
  url: "/glasscn-social-card.png",
  width: 1200,
  height: 630,
  alt: "glasscn liquid glass components for shadcn/ui",
};

export const TWITTER_SUMMARY_IMAGE = "/glasscn-social-summary.png";

type CreatePageMetadataOptions = { title: string; description: string; socialTitle?: string; imageAlt?: string };

export function createPageMetadata({
  title,
  description,
  socialTitle = `${title} - glasscn`,
  imageAlt = SOCIAL_CARD_IMAGE.alt,
}: CreatePageMetadataOptions): Metadata {
  return {
    title,
    description,
    openGraph: { title: socialTitle, description, images: [{ ...SOCIAL_CARD_IMAGE, alt: imageAlt }] },
    twitter: { card: "summary", title: socialTitle, description, images: [TWITTER_SUMMARY_IMAGE] },
  };
}
