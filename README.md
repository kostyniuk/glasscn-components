# glasscn

A glassmorphism component library built on top of shadcn/ui. All components are available via the shadcn registry and can be dropped into any Next.js / React project.

<img width="793" height="1035" alt="Screenshot 2026-04-27 at 11 24 04 AM" src="https://github.com/user-attachments/assets/5a0a0065-baba-42d3-94ec-1e41067634eb" />

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

| Component | Install |
|-----------|---------|
| Glass Alert | `npx shadcn add @glasscn/glass-alert` |
| Glass Alert Dialog | `npx shadcn add @glasscn/glass-alert-dialog` |
| Glass Badge | `npx shadcn add @glasscn/glass-badge` |
| Glass Button | `npx shadcn add @glasscn/glass-button` |
| Glass Calendar | `npx shadcn add @glasscn/glass-calendar` |
| Glass Card | `npx shadcn add @glasscn/glass-card` |
| Glass Checkbox | `npx shadcn add @glasscn/glass-checkbox` |
| Glass Code Block Command | `npx shadcn add @glasscn/glass-code-block-command` |
| Glass Combobox | `npx shadcn add @glasscn/glass-combobox` |
| Glass Select | `npx shadcn add @glasscn/glass-select` |
| Glass Separator | `npx shadcn add @glasscn/glass-separator` |
| Glass Sidebar | `npx shadcn add @glasscn/glass-sidebar` |

### Utilities

| Item | Install |
|------|---------|
| Glass Variants | `npx shadcn add @glasscn/glass-variants` |
| Utils | `npx shadcn add @glasscn/utils` |

## Usage

After installing a component, import it from your components directory:

```tsx
import { GlassButton } from "@/components/ui/glasscn/glass-button";

export default function Page() {
  return (
    <div>
      <GlassButton>Clear Glass</GlassButton>
      <GlassButton glassVariant="frosted">Frosted Glass</GlassButton>
      <GlassButton glassVariant="subtle">Subtle Glass</GlassButton>
      <GlassButton glassVariant="liquid">Liquid Glass</GlassButton>
    </div>
  );
}
```
