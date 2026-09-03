# Arcade UI

The official design system and component library for **Paper Critters**.

High-contrast, chunky, **sharp corners** (6px), **2px borders**, **lime accent** (`#b0d135`), **FattiPatti** headers, **Space Grotesk** buttons, and **IBM Plex** for UI. Built on React 19, Tailwind CSS v4, and Radix UI primitives. Ships light and dark mode out of the box.

---

## Features

- 🕹️ **Arcade Signature Aesthetics**: Hard offset drop shadows (3px, 5px, 8px) with responsive active collapse physics on button press.
- 🎨 **Adaptive Themes**: Dual light and dark mode driven by CSS variables and semantic tokens.
- 🧩 **Complete Component Suite**: Buttons, Split Buttons, Inputs, Cards, Glass Panels, Dropdowns, Selects, Sliders, Checkboxes, Switches, Modals, Drawers, Tooltips, Toasts, Color Pickers, and more.
- 📖 **Storybook 8 Catalog**: Interactive component playground with theme switching and accessibility checks.
- 📦 **Dual ESM & CJS**: Full TypeScript `.d.ts` declarations and tree-shaking support.

---

## Installation

```bash
npm install arcade-ui
```

### 1. Configure Theme & Fonts

In your global CSS entry file (e.g. `src/index.css`):

```css
@import "tailwindcss";
@import "arcade-ui/theme.css";
@import "arcade-ui/fonts.css";
```

Load the Google Fonts in your HTML `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## Quick Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, CardFooter } from 'arcade-ui'

export function Example() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Sir Fluffington</CardTitle>
      </CardHeader>
      <CardContent>
        Chunky sharp-cornered paper toy ready to print.
      </CardContent>
      <CardFooter className="gap-3">
        <Button variant="primary">Edit Toy</Button>
        <Button variant="hero">Download PDF</Button>
      </CardFooter>
    </Card>
  )
}
```

---

## Developing & Storybook

Run the interactive Storybook catalog:

```bash
npm run storybook
```

Build Storybook static site:
```bash
npm run build-storybook
```

Build the library for distribution:
```bash
npm run build
```

---

## License

MIT © Paper Critters
