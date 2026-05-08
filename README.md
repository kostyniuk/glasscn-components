# glasscn

A glassmorphism component library built on top of shadcn/ui. All components are available via the shadcn registry and can be dropped into any Next.js / React project.

<img width="1363" height="956" alt="Screenshot 2026-05-08 at 11 09 38 PM" src="https://github.com/user-attachments/assets/d0ae36e1-fe82-4120-9ee8-64259331505f" />

## Links

**Homepage:** https://glasscn.vercel.app

## Installation

Install any component directly by name using the `@glasscn/` registry prefix:

```bash
npx shadcn add @glasscn/<component-name>
```

For example:

```bash
npx shadcn add @glasscn/glass-code-block-command
```

Dependencies (including other registry items) are resolved and installed automatically.

## Available components

### Glass components

| Component                | Install                                            |
| ------------------------ | -------------------------------------------------- |
| Glass Alert              | `npx shadcn add @glasscn/glass-alert`              |
| Glass Alert Dialog       | `npx shadcn add @glasscn/glass-alert-dialog`       |
| Glass Badge              | `npx shadcn add @glasscn/glass-badge`              |
| Glass Button             | `npx shadcn add @glasscn/glass-button`             |
| Glass Calendar           | `npx shadcn add @glasscn/glass-calendar`           |
| Glass Card               | `npx shadcn add @glasscn/glass-card`               |
| Glass Checkbox           | `npx shadcn add @glasscn/glass-checkbox`           |
| Glass Code Block Command | `npx shadcn add @glasscn/glass-code-block-command` |
| Glass Combobox           | `npx shadcn add @glasscn/glass-combobox`           |
| Glass Select             | `npx shadcn add @glasscn/glass-select`             |
| Glass Separator          | `npx shadcn add @glasscn/glass-separator`          |
| Glass Sidebar            | `npx shadcn add @glasscn/glass-sidebar`            |

### Utilities

| Item           | Install                                  |
| -------------- | ---------------------------------------- |
| Glass Variants | `npx shadcn add @glasscn/glass-variants` |
| Utils          | `npx shadcn add @glasscn/utils`          |

## Usage

After installing a component, import it from your components directory:

```tsx
import { GlassButton } from "@/components/ui/glasscn/glass-button"

export default function Page() {
  return (
    <div>
      <GlassButton>Clear Glass</GlassButton>
      <GlassButton glassVariant="frosted">Frosted Glass</GlassButton>
      <GlassButton glassVariant="subtle">Subtle Glass</GlassButton>
      <GlassButton glassVariant="liquid">Liquid Glass</GlassButton>
      <GlassButton glassVariant="liquid-refract">Liquid Refract</GlassButton>
    </div>
  )
}
```

### Liquid variants

- **`liquid`** — pure CSS. Heavy saturation + sheen + multi-layer bevel. Zero setup.
- **`liquid-refract`** — SVG displacement filter. Real lens-like refraction with curved glass effect.
