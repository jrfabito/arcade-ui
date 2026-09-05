# Arcade UI Component Roadmap & Ant Design Parity Checklist

The official tracking document for **Arcade UI** component development, benchmarking against **Ant Design (AntD v5)** and tailored for **Paper Critters**.

---

## 📊 Summary & Progress Tracker

- **Target Benchmark**: Ant Design v5 (~60 components)
- **Arcade Built**: ~25 components/primitives
- **Parity / Expansion Target**: 20 new primitives & composites
- **Current Completion**: ~55% of core UI system

---

## 🧭 Implementation Checklist by Priority Tier

### 🚀 Tier 1: Core Essentials (High ROI, Layout & Controls)
High-impact components needed for everyday application views, panels, and toolbars.

- [ ] **Tabs** (`<Tabs>`, `<TabsList>`, `<TabsTrigger>`, `<TabsContent>`)
  - *Dependency*: `@radix-ui/react-tabs`
  - *Arcade Spec*: Chunky folder tab tops with 2px borders, lime highlight underline, active shadow collapse.
- [ ] **Segmented Control** (`<Segmented>`)
  - *Dependency*: Custom / `@radix-ui/react-radio-group`
  - *Arcade Spec*: Chunky sliding pill or button group (e.g. `[ Editor | 3D View | Assembly ]`).
- [ ] **Alert Banner** (`<Alert>`)
  - *Arcade Spec*: Inline banner with 4 statuses (`info`, `success`, `warning`, `error`), bold icon, title, description, and optional close button.
- [ ] **Standalone Pagination** (`<Pagination>`)
  - *Arcade Spec*: Extract standalone pagination controls from `<Table />` for use in galleries, search pages, and card grids.
- [ ] **Progress Bar** (`<Progress>`)
  - *Arcade Spec*: Chunky linear progress bar with striped/arcade meter variants and percentages (great for export/print rendering).
- [ ] **Inline Spinner / Loader** (`<Spinner>`)
  - *Arcade Spec*: Standalone loading spinner for buttons and async cards (`size="sm" | "md" | "lg"`).
- [ ] **Divider** (`<Divider>`)
  - *Arcade Spec*: Horizontal & vertical divider rules with optional center label (e.g. `--- OR ---`).

---

### 🎨 Tier 2: Creative & App Specific (Paper Critters Superpowers)
Components specifically needed for paper crafting, file handling, user onboarding, and templates.

- [ ] **File Upload / Dropzone** (`<Upload>`)
  - *Arcade Spec*: Drag-and-drop zone with dashed 2px border, file preview cards, progress state, and file-type validation (SVGs, PDFs, textures).
- [ ] **Empty State** (`<Empty>`)
  - *Arcade Spec*: Chunky card with empty illustration/icon, title, explanation, and primary action button.
- [ ] **Avatar & AvatarGroup** (`<Avatar>`)
  - *Arcade Spec*: 6px-rounded avatars with 2px border, fallback initials, status dots, and `+N` stacked groups.
- [ ] **Textarea** (`<Textarea>`, `<AutoResizeTextarea>`)
  - *Arcade Spec*: Multi-line input with character counter and optional auto-expanding height.
- [ ] **Steps / Wizard** (`<Steps>`)
  - *Arcade Spec*: Numbered step indicators with connected line—ideal for step-by-step paper craft folding guides or checkout.
- [ ] **Skeleton Loader** (`<Skeleton>`)
  - *Arcade Spec*: Pulsing/shimmer placeholder rectangles for critter cards, table rows, and avatar headers.
- [ ] **Breadcrumbs** (`<Breadcrumb>`)
  - *Arcade Spec*: Slash or chevron-separated navigation trail for deep app routes.

---

### 📦 Tier 3: Polish & Advanced Display
Advanced data display, metadata specifications, and micro-interactions.

- [ ] **Statistic / StatCard** (`<Statistic>`)
  - *Arcade Spec*: Large counter with label, trend badge, and icon (e.g., "1,420 Prints this week").
- [ ] **Descriptions** (`<Descriptions>`)
  - *Arcade Spec*: 2-column or 3-column bordered specification table for item attributes (Paper weight, fold count, difficulty).
- [ ] **Rate / Rating** (`<Rate>`)
  - *Arcade Spec*: 5-star or custom-icon rating selector with half-star support.
- [ ] **Closable Tag** (`<Tag>`)
  - *Arcade Spec*: Interactive chip with an `x` remove button for search tags, materials, and filters.
- [ ] **Result Page** (`<Result>`)
  - *Arcade Spec*: Full-page or container layout for 404 Not Found, 500 Server Error, and Success confirmations.
- [ ] **Popconfirm** (`<Popconfirm>`)
  - *Arcade Spec*: Micro popover confirmation pinned directly to the trigger button for fast, non-disruptive actions (e.g. "Delete layer? [Cancel] [Delete]").
- [ ] **FloatButton** (`<FloatButton>`)
  - *Arcade Spec*: Floating Action Button (FAB) for back-to-top or quick actions.

---

## 🏛️ Comprehensive Ant Design Parity Matrix

| Ant Design Category | Ant Design Component | Arcade UI Equivalent | Status |
| :--- | :--- | :--- | :---: |
| **General** | Button | `Button`, `SplitButton` | ✅ Built |
| | FloatButton | `<FloatButton>` | 🔴 Planned (Tier 3) |
| | Icon | `lucide-react`, `ArcadeMark` | 🟡 Built via Lucide |
| | Typography | CSS / Tailwind | 🟡 Built via Tokens |
| **Layout** | Divider | `<Divider>` | 🔴 Planned (Tier 1) |
| | Grid (`Row`, `Col`) | Tailwind Flex & Grid | ⚪ Native Tailwind |
| | Layout (`Header`, `Sider`) | `GlobalNav`, `AdminSidebar`, `Footer` | ✅ Built |
| | Space / Flex | Tailwind `flex gap-*` | ⚪ Native Tailwind |
| | Splitter | `<Splitter>` | ⚪ Backlog |
| **Navigation** | Breadcrumb | `<Breadcrumb>` | 🔴 Planned (Tier 2) |
| | Dropdown | `DropdownMenu` | ✅ Built |
| | Menu | `AdminSidebar`, `MobileMenu` | ✅ Built |
| | PageHeader | — | 🔴 Planned |
| | Pagination | `Table` (embedded) | 🟡 Standalone Needed (Tier 1) |
| | Steps | `<Steps>` | 🔴 Planned (Tier 2) |
| | Anchor | — | ⚪ Backlog |
| **Data Entry** | AutoComplete | `<AutoComplete>` | ⚪ Backlog |
| | Cascader | — | ⚪ Low Priority |
| | Checkbox | `Checkbox`, `MultiSelectCheckbox` | ✅ Built |
| | ColorPicker | `ColorPalette` | ✅ Built |
| | DatePicker | `<DatePicker>` | ⚪ Backlog |
| | Form / Form.Item | `Label`, `PasswordChecklist` | 🟡 Form Wrapper Needed |
| | Input | `Input`, `AutoWidthInput`, `PasswordInput` | ✅ Built |
| | InputNumber | `ScrubbyInput` | ✅ Built |
| | Radio | `RadioGroup`, `RadioGroupItem` | ✅ Built |
| | Rate | `<Rate>` | 🔴 Planned (Tier 3) |
| | Select | `Select` | ✅ Built |
| | Slider | `Slider` | ✅ Built |
| | Switch | `Switch` | ✅ Built |
| | Textarea | `<Textarea>` | 🔴 Planned (Tier 2) |
| | Transfer | — | ⚪ Low Priority |
| | TreeSelect | — | ⚪ Low Priority |
| | Upload | `<Upload>` | 🔴 Planned (Tier 2) |
| **Data Display** | Avatar / AvatarGroup | `<Avatar>` | 🔴 Planned (Tier 2) |
| | Badge | `Badge` | ✅ Built |
| | Card | `Card`, `GlassPanel` | ✅ Built |
| | Carousel | `<Carousel>` | ⚪ Backlog |
| | Collapse | `Accordion` | ✅ Built |
| | Descriptions | `<Descriptions>` | 🔴 Planned (Tier 3) |
| | Empty | `<Empty>` | 🔴 Planned (Tier 2) |
| | Image Preview | `<Image>` | ⚪ Backlog |
| | List | `<List>` | ⚪ Backlog |
| | Popover | `Popover` | ✅ Built |
| | QRCode | `<QRCode>` | ⚪ Backlog |
| | Segmented | `<Segmented>` | 🔴 Planned (Tier 1) |
| | Statistic | `<Statistic>` | 🔴 Planned (Tier 3) |
| | Table | `Table` (Full AntD parity) | ✅ Built |
| | Tabs | `<Tabs>` | 🔴 Planned (Tier 1) |
| | Tag | `Badge` / `<Tag>` | 🟡 Planned (Tier 3) |
| | Timeline | `<Timeline>` | ⚪ Backlog |
| | Tooltip | `ActionTooltip`, `ItemTooltipCard` | ✅ Built |
| | Tree | — | ⚪ Low Priority |
| **Feedback** | Alert | `<Alert>` | 🔴 Planned (Tier 1) |
| | Drawer | `DrawerShell` | ✅ Built |
| | Message / Toast | `Toast` | ✅ Built |
| | Modal | `ModalShell`, `ConfirmModal` | ✅ Built |
| | Notification | `Toast` | 🟡 Built |
| | Popconfirm | `<Popconfirm>` | 🔴 Planned (Tier 3) |
| | Progress | `<Progress>` | 🔴 Planned (Tier 1) |
| | Result | `<Result>` | 🔴 Planned (Tier 3) |
| | Skeleton | `<Skeleton>` | 🔴 Planned (Tier 2) |
| | Spin / Spinner | `LoadingOverlay` / `<Spinner>` | 🟡 Standalone Needed (Tier 1) |

---

## 🛠️ Contribution & Development Workflow

When implementing any component from this checklist:
1. **Create Primitive / Component**: Place in `src/primitives/` (atomic) or `src/components/` (composite).
2. **Arcade Token Adherence**:
   - 2px borders (`border-2`)
   - 6px radius (`rounded-md`)
   - Hard offset shadows (`shadow-[3px_3px_0px_#000]` or semantic shadow tokens)
   - Fonts: `IBM Plex Sans` for UI, `Space Grotesk` for controls/tabs, `FattiPatti` for prominent headings.
3. **Storybook Story**: Create a `.stories.tsx` file with interactive controls and dark mode preview.
4. **Export in `src/index.ts`**: Re-export component and its TypeScript types.
5. **Check off item**: Change `- [ ]` to `- [x]` in [ROADMAP.md](file:///Users/jrfabito/Documents/paper%20critters/arcade-ui/ROADMAP.md).
