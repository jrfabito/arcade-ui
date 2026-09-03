import { useEffect, useRef, useState } from 'react'
import { Check, Pipette, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

function hslToHex(h: number, s: number, l: number): string {
  s /= 100
  l /= 100
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  const toHex = (x: number) =>
    Math.round(255 * x)
      .toString(16)
      .padStart(2, '0')
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`
}

const HUES = [0, 25, 50, 140, 190, 215, 260, 300]
const ROWS = [
  { l: 60, s: 88 },
  { l: 80, s: 52 },
  { l: 52, s: 58 },
  { l: 40, s: 60 },
  { l: 27, s: 58 },
]
const GRAYS = [0, 14, 28, 42, 57, 71, 85, 100].map((l) => hslToHex(0, 0, l))
export const ARCADE_PRESET_COLORS: string[] = [
  ...GRAYS,
  ...ROWS.flatMap((r) => HUES.map((h) => hslToHex(h, r.s, r.l))),
]

function isLight(hex: string): boolean {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex)
  if (!m) return true
  const n = parseInt(m[1], 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6
}

const eq = (a: string, b: string) => a.toLowerCase() === b.toLowerCase()

export interface ColorPaletteProps {
  value: string
  onChange: (hex: string) => void
  onCommit?: (hex: string) => void
  onReset?: () => void
  defaultColor?: string
  presetColors?: string[]
  className?: string
}

export function ColorPalette({
  value,
  onChange,
  onCommit,
  onReset,
  defaultColor = '#ffffff',
  presetColors = ARCADE_PRESET_COLORS,
  className,
}: ColorPaletteProps) {
  const [open, setOpen] = useState(false)
  const [hasEyeDropper, setHasEyeDropper] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setHasEyeDropper('EyeDropper' in window)
  }, [])

  const handleSelect = (c: string) => {
    onChange(c)
    onCommit?.(c)
  }

  const handlePickEyeDropper = async () => {
    try {
      // @ts-expect-error EyeDropper API
      const eyeDropper = new window.EyeDropper()
      const result = await eyeDropper.open()
      if (result?.sRGBHex) {
        handleSelect(result.sRGBHex)
      }
    } catch {
      // User cancelled
    }
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Color preview"
            style={{ backgroundColor: value }}
            className="size-7 rounded-md border-2 border-input-border shadow-[var(--shadow-sm)] transition hover:scale-105"
          />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
            {value}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {hasEyeDropper && (
            <button
              type="button"
              onClick={handlePickEyeDropper}
              aria-label="Pick color from screen"
              className="flex size-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <Pipette className="size-3.5" />
            </button>
          )}
          {onReset && (
            <button
              type="button"
              onClick={() => {
                handleSelect(defaultColor)
                onReset()
              }}
              aria-label="Reset color"
              className="flex size-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <RotateCcw className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-8 gap-1.5">
        {presetColors.map((hex) => {
          const selected = eq(hex, value)
          const light = isLight(hex)
          return (
            <button
              key={hex}
              type="button"
              onClick={() => handleSelect(hex)}
              style={{ backgroundColor: hex }}
              className={cn(
                "relative size-5 rounded-[4px] border border-black/10 transition hover:scale-110",
                selected && "ring-2 ring-foreground ring-offset-1"
              )}
              aria-label={hex}
            >
              {selected && (
                <Check
                  className={cn(
                    "absolute inset-0 m-auto size-3 stroke-[3]",
                    light ? "text-black" : "text-white"
                  )}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
