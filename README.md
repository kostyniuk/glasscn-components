# glasscn

A glassmorphism component library built on top of shadcn/ui. All components are available via the shadcn registry and can be dropped into any Next.js / React project.

<img width="1485" height="721" alt="image" src="https://github.com/user-attachments/assets/8638ab7f-eb0d-4c09-bf8d-e1ddc65ececa" />
<img width="1028" height="946" alt="Screenshot 2026-05-10 at 8 38 08 PM" src="https://github.com/user-attachments/assets/1feb8bc2-3c27-4bd0-8e22-17de96295bca" />

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
| Glass Button Group       | `npx shadcn add @glasscn/glass-button-group`       |
| Glass Calendar           | `npx shadcn add @glasscn/glass-calendar`           |
| Glass Card               | `npx shadcn add @glasscn/glass-card`               |
| Glass Checkbox           | `npx shadcn add @glasscn/glass-checkbox`           |
| Glass Code Block Command | `npx shadcn add @glasscn/glass-code-block-command` |
| Glass Combobox           | `npx shadcn add @glasscn/glass-combobox`           |
| Glass Input              | `npx shadcn add @glasscn/glass-input`              |
| Glass Item               | `npx shadcn add @glasscn/glass-item`               |
| Glass Popover            | `npx shadcn add @glasscn/glass-popover`            |
| Glass Radio Group        | `npx shadcn add @glasscn/glass-radio-group`        |
| Glass Select             | `npx shadcn add @glasscn/glass-select`             |
| Glass Separator          | `npx shadcn add @glasscn/glass-separator`          |
| Glass Sidebar            | `npx shadcn add @glasscn/glass-sidebar`            |
| Glass Skeleton           | `npx shadcn add @glasscn/glass-skeleton`           |

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
