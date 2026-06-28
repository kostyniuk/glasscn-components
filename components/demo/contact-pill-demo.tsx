import { GlassContactPill, type GlassContactAvatarPlacement } from "@/components/ui/glasscn/glass-contact-pill";

type ContactPillDemoProps = { variant?: GlassContactAvatarPlacement };

const AVATAR_SRC =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&fit=crop&crop=faces";

export function ContactPillDemo({ variant = "top" }: ContactPillDemoProps) {
  if (variant === "leading") {
    return (
      <GlassContactPill avatarPlacement="leading" caption="online" name="Ava Bennett" src={AVATAR_SRC} fallback="AB" />
    );
  }

  return <GlassContactPill name="Ava Bennett" src={AVATAR_SRC} fallback="AB" />;
}
