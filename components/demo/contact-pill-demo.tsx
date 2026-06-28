import { GlassContactPill } from "@/components/ui/glasscn/glass-contact-pill";

const AVATAR_SRC = "/avatar_me.jpg";
const NAME = "Alex Kostyniuk";

const variantConfig = {
  top: { avatarPlacement: "top", src: AVATAR_SRC },
  "top + caption": { avatarPlacement: "top", src: AVATAR_SRC, caption: "online" },
  "top + initials": { avatarPlacement: "top", caption: "online" },
  leading: { avatarPlacement: "leading", src: AVATAR_SRC },
  "leading + caption": { avatarPlacement: "leading", src: AVATAR_SRC, caption: "online" },
  "leading + initials": { avatarPlacement: "leading", caption: "online" },
} as const;

type ContactPillDemoProps = { variant?: keyof typeof variantConfig };

export function ContactPillDemo({ variant = "top" }: ContactPillDemoProps) {
  const config = variantConfig[variant] ?? variantConfig.top;
  return <GlassContactPill name={NAME} {...config} />;
}
