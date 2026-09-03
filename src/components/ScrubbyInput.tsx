import * as React from 'react'
import { Input } from '@/primitives/Input'
import { cn } from '@/lib/utils'

export interface ScrubbyInputProps {
  value: number
  onValueChange: (value: number) => void
  onValueCommit?: (value: number) => void
  label: string
  min?: number
  max?: number
  step?: number
  className?: string
  pixelsPerUnit?: number
}

export function ScrubbyInput({
  value,
  onValueChange,
  onValueCommit,
  label,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className,
  pixelsPerUnit = 2,
}: ScrubbyInputProps) {
  const isDragging = React.useRef(false)
  const startX = React.useRef(0)
  const startValue = React.useRef(0)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const onValueChangeRef = React.useRef(onValueChange)
  const onValueCommitRef = React.useRef(onValueCommit)

  React.useEffect(() => {
    onValueChangeRef.current = onValueChange
    onValueCommitRef.current = onValueCommit
  }, [onValueChange, onValueCommit])

  const decimals = step.toString().split('.')[1]?.length || 0
  const [localValue, setLocalValue] = React.useState(Number(value).toFixed(decimals))
  const [isFocused, setIsFocused] = React.useState(false)

  React.useEffect(() => {
    if (!isFocused) {
      setLocalValue(Number(value).toFixed(decimals))
    }
  }, [value, isFocused, decimals])

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    isDragging.current = true
    startX.current = e.clientX
    startValue.current = value

    const handlePointerMove = (moveEvent: PointerEvent) => {
      if (!isDragging.current) return
      const deltaX = moveEvent.clientX - startX.current
      const deltaUnits = (deltaX / pixelsPerUnit) * step
      let nextValue = startValue.current + deltaUnits

      nextValue = Math.min(max, Math.max(min, nextValue))

      if (step >= 1) {
        nextValue = Math.round(nextValue)
      } else {
        const factor = Math.pow(10, decimals)
        nextValue = Math.round(nextValue * factor) / factor
      }

      onValueChangeRef.current(nextValue)
    }

    const handlePointerUp = () => {
      if (isDragging.current) {
        isDragging.current = false
        window.removeEventListener('pointermove', handlePointerMove)
        window.removeEventListener('pointerup', handlePointerUp)
        if (onValueCommitRef.current) {
          onValueCommitRef.current(startValue.current)
        }
      }
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
  }

  return (
    <div className={cn('relative flex items-center', className)}>
      <div
        onPointerDown={handlePointerDown}
        className="absolute left-2.5 z-10 flex cursor-ew-resize select-none items-center font-mono text-xs font-semibold text-muted-foreground hover:text-foreground active:text-accent-strong"
        title="Click and drag to scrub"
      >
        {label}
      </div>
      <Input
        ref={inputRef}
        type="number"
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value)
          const val = Number(e.target.value)
          if (!isNaN(val)) {
            const clamped = Math.min(max, Math.max(min, val))
            onValueChange(clamped)
          }
        }}
        onBlur={(e) => {
          setIsFocused(false)
          const val = Number(e.target.value)
          if (!isNaN(val) && onValueCommit) {
            const clamped = Math.min(max, Math.max(min, val))
            onValueCommit(clamped)
          }
        }}
        onFocus={() => {
          setIsFocused(true)
          if (onValueCommit) onValueCommit(value)
        }}
        step={step}
        className="pl-7 pr-2 font-mono text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </div>
  )
}
