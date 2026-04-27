# glasscn

A glassmorphism component library built on top of shadcn/ui. All components are available via the shadcn registry and can be dropped into any Next.js / React project.

<img width="793" height="1035" alt="Screenshot 2026-04-27 at 11 24 04 AM" src="https://github.com/user-attachments/assets/5a0a0065-baba-42d3-94ec-1e41067634eb" />

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

### UI primitives

| Component | Install |
|-----------|---------|
| Alert | `npx shadcn add @glasscn/alert` |
| Alert Dialog | `npx shadcn add @glasscn/alert-dialog` |
| Badge | `npx shadcn add @glasscn/badge` |
| Button | `npx shadcn add @glasscn/button` |
| Calendar | `npx shadcn add @glasscn/calendar` |
| Card | `npx shadcn add @glasscn/card` |
| Checkbox | `npx shadcn add @glasscn/checkbox` |
| Code Block Command | `npx shadcn add @glasscn/code-block-command` |
| Combobox | `npx shadcn add @glasscn/combobox` |
| Input | `npx shadcn add @glasscn/input` |
| Input Group | `npx shadcn add @glasscn/input-group` |
| Select | `npx shadcn add @glasscn/select` |
| Separator | `npx shadcn add @glasscn/separator` |
| Sheet | `npx shadcn add @glasscn/sheet` |
| Sidebar | `npx shadcn add @glasscn/sidebar` |
| Skeleton | `npx shadcn add @glasscn/skeleton` |
| Textarea | `npx shadcn add @glasscn/textarea` |
| Tooltip | `npx shadcn add @glasscn/tooltip` |

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
    </div>
  );
}
```
