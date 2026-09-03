import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

export interface ThemeToggleProps {
  className?: string
  lightLabel?: string
  darkLabel?: string
  switchLightAria?: string
  switchDarkAria?: string
}

export function ThemeToggle({
  className,
  lightLabel = "Light mode",
  darkLabel = "Dark mode",
  switchLightAria = "Switch to light mode",
  switchDarkAria = "Switch to dark mode",
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? switchLightAria : switchDarkAria}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border-2 border-input-border bg-card px-3.5 py-2",
        "font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-foreground",
        "transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <span className="size-3 rounded-[3px] bg-accent" aria-hidden />
      {isDark ? lightLabel : darkLabel}
    </button>
  )
}
