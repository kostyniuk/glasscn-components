export type PreviewBackground = {
  value: string;
  label: string;
  tone: "neutral" | "light" | "dark";
  backgroundImage?: string;
  src?: string;
  swatch: string;
  image?: boolean;
  checker?: boolean;
};

function imageBackground(value: string, label: string, tone: "light" | "dark", file: string): PreviewBackground {
  return {
    value,
    label,
    tone,
    backgroundImage: `url('/${file}')`,
    src: `/${file}`,
    swatch: `url('/${file.replace(/\.jpg$/, "-thumb.jpg")}')`,
    image: true,
  };
}

export const previewBackgrounds = [
  {
    value: "transparent",
    label: "Transparent",
    tone: "neutral",
    swatch:
      "linear-gradient(45deg, rgba(127,127,127,0.28) 25%, transparent 25%), linear-gradient(-45deg, rgba(127,127,127,0.28) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(127,127,127,0.28) 75%), linear-gradient(-45deg, transparent 75%, rgba(127,127,127,0.28) 75%)",
    checker: true,
  },
  {
    value: "aurora",
    label: "Aurora",
    tone: "light",
    backgroundImage:
      "radial-gradient(circle at 20% 18%, #f8d36d 0, transparent 34%), linear-gradient(135deg, #6dd5ed 0%, #8f6ed5 52%, #f15bb5 100%)",
    swatch: "linear-gradient(135deg, #6dd5ed, #8f6ed5 52%, #f15bb5)",
  },
  {
    value: "lagoon",
    label: "Lagoon",
    tone: "light",
    backgroundImage: "linear-gradient(145deg, #0ea5e9 0%, #14b8a6 45%, #d9f99d 100%)",
    swatch: "linear-gradient(145deg, #0ea5e9, #14b8a6 45%, #d9f99d)",
  },
  {
    value: "mint",
    label: "Mint",
    tone: "light",
    backgroundImage: "linear-gradient(135deg, #ecfccb 0%, #86efac 32%, #22d3ee 68%, #60a5fa 100%)",
    swatch: "linear-gradient(135deg, #ecfccb, #86efac 32%, #22d3ee 68%, #60a5fa)",
  },
  {
    value: "plum",
    label: "Plum",
    tone: "dark",
    backgroundImage:
      "radial-gradient(circle at 72% 24%, #f0abfc 0, transparent 30%), linear-gradient(135deg, #312e81 0%, #7e22ce 50%, #db2777 100%)",
    swatch: "linear-gradient(135deg, #312e81, #7e22ce 50%, #db2777)",
  },
  imageBackground("photo-1", "Photo 1", "light", "preview-bg-user-1.jpg"),
  imageBackground("photo-2", "Photo 2", "dark", "preview-bg-user-4.jpg"),
  imageBackground("photo-3", "Photo 3", "dark", "preview-bg-user-5.jpg"),
  imageBackground("photo-4", "Photo 4", "dark", "preview-bg-user-6.jpg"),
  imageBackground("wallpaper-1", "Wallpaper 1", "dark", "preview-bg-d-1.jpg"),
  imageBackground("wallpaper-2", "Wallpaper 2", "light", "preview-bg-d-2.jpg"),
  imageBackground("wallpaper-3", "Wallpaper 3", "light", "preview-bg-d-3.jpg"),
  imageBackground("wallpaper-4", "Wallpaper 4", "light", "preview-bg-d-4.jpg"),
  imageBackground("wallpaper-5", "Wallpaper 5", "light", "preview-bg-d-5.jpg"),
  imageBackground("wallpaper-6", "Wallpaper 6", "light", "preview-bg-d-6.jpg"),
  imageBackground("wallpaper-7", "Wallpaper 7", "dark", "preview-bg-d-7.jpg"),
  imageBackground("wallpaper-8", "Wallpaper 8", "dark", "preview-bg-d-8.jpg"),
  imageBackground("wallpaper-9", "Wallpaper 9", "dark", "preview-bg-d-9.jpg"),
] satisfies PreviewBackground[];

export const lightPreviewBackgrounds = previewBackgrounds.filter((background) => background.tone !== "dark");
export const darkPreviewBackgrounds = previewBackgrounds.filter((background) => background.tone === "dark");
