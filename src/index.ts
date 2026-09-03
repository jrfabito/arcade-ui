// Library Root Index

// Tokens & Utilities
export { cn } from './lib/utils'
export { useTheme, setTheme, toggleTheme } from './hooks/useTheme'
export type { Theme } from './hooks/useTheme'
export { useIsMobile } from './hooks/useIsMobile'

// Primitives
export { Button, buttonVariants } from './primitives/Button'
export { Input } from './primitives/Input'
export { Label } from './primitives/Label'
export { Badge, badgeVariants } from './primitives/Badge'
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './primitives/Card'
export { GlassPanel } from './primitives/GlassPanel'
export { Slider } from './primitives/Slider'
export { Switch } from './primitives/Switch'
export { Checkbox } from './primitives/Checkbox'
export { RadioGroup, RadioGroupItem } from './primitives/RadioGroup'
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from './primitives/Select'
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from './primitives/DropdownMenu'
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './primitives/Accordion'

// Specialized & Composite Components
export {
  SplitButton,
  splitButtonWrapperVariants,
  splitButtonMainVariants,
  splitButtonTriggerVariants,
} from './components/SplitButton'
export type { SplitButtonItem, SplitButtonProps } from './components/SplitButton'

export { ScrubbyInput } from './components/ScrubbyInput'
export type { ScrubbyInputProps } from './components/ScrubbyInput'

export { AutoWidthInput } from './components/AutoWidthInput'
export type { AutoWidthInputProps } from './components/AutoWidthInput'

export { PasswordInput } from './components/PasswordInput'
export type { PasswordInputProps } from './components/PasswordInput'

export { PasswordChecklist, DEFAULT_PW_RULES } from './components/PasswordChecklist'
export type { PasswordRule, PasswordChecklistProps } from './components/PasswordChecklist'

export { ThemeToggle } from './components/ThemeToggle'
export type { ThemeToggleProps } from './components/ThemeToggle'

export { ActionTooltip } from './components/ActionTooltip'
export type { ActionTooltipProps } from './components/ActionTooltip'

export { ItemTooltipCard, ItemTooltipHeader } from './components/ItemTooltip'
export type { ItemTooltipCardProps, ItemTooltipHeaderProps } from './components/ItemTooltip'

export { Toast } from './components/Toast'
export type { ToastProps } from './components/Toast'

export { ConnectionBanner } from './components/ConnectionBanner'
export type { ConnectionBannerProps } from './components/ConnectionBanner'

export { LoadingOverlay } from './components/LoadingOverlay'
export type { LoadingOverlayProps } from './components/LoadingOverlay'

export { ModalShell } from './components/ModalShell'
export type { ModalShellProps } from './components/ModalShell'

export { DrawerShell } from './components/DrawerShell'
export type { DrawerShellProps } from './components/DrawerShell'

export { MultiSelectCheckbox } from './components/MultiSelectCheckbox'
export type { MultiSelectCheckboxProps, MultiSelectGroup } from './components/MultiSelectCheckbox'

export { ColorPalette, ARCADE_PRESET_COLORS } from './components/ColorPalette'
export type { ColorPaletteProps } from './components/ColorPalette'

export { FilterBarShell } from './components/FilterBarShell'
export type { FilterBarShellProps, SortOption, FacetConfig } from './components/FilterBarShell'

export { ArcadeMark } from './components/Brand'
