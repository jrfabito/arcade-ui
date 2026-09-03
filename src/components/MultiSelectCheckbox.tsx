import { useState, useMemo } from 'react'
import { Popover as PopoverPrimitive } from 'radix-ui'
import { ChevronDown, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface MultiSelectGroup {
  label: string
  items: string[]
}

export interface MultiSelectCheckboxProps {
  label: string
  options: string[]
  selected: Set<string>
  onToggle: (value: string) => void
  groups?: MultiSelectGroup[]
  triggerId?: string
  labelledBy?: string
  hideInlineLabel?: boolean
  onClear?: () => void
  clearLabel?: string
  formatOption?: (value: string) => string
  emptyText?: string
  searchThreshold?: number
  searchPlaceholder?: string
  className?: string
  contentClassName?: string
  listClassName?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  avoidCollisions?: boolean
}

export function MultiSelectCheckbox({
  label,
  options,
  selected,
  onToggle,
  groups,
  triggerId,
  labelledBy,
  hideInlineLabel = false,
  onClear,
  clearLabel,
  formatOption,
  emptyText = "No options found",
  searchThreshold = 8,
  searchPlaceholder = "Search options...",
  className,
  contentClassName,
  listClassName,
  side = 'bottom',
  avoidCollisions = true,
}: MultiSelectCheckboxProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const showSearch = options.length >= searchThreshold

  const filteredOptions = useMemo(() => {
    if (!query.trim()) return options
    const q = query.toLowerCase()
    return options.filter((opt) => {
      const display = formatOption ? formatOption(opt) : opt
      return display.toLowerCase().includes(q)
    })
  }, [options, query, formatOption])

  const filteredSet = useMemo(() => new Set(filteredOptions), [filteredOptions])

  const effectiveGroups = useMemo(() => {
    if (!groups) return null
    return groups
      .map((g) => ({
        label: g.label,
        items: g.items.filter((item) => filteredSet.has(item)),
      }))
      .filter((g) => g.items.length > 0)
  }, [groups, filteredSet])

  const selectedCount = selected.size

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <div className={cn("relative inline-flex items-center", className)}>
        <PopoverPrimitive.Trigger
          id={triggerId}
          aria-labelledby={labelledBy ? `${labelledBy} ${triggerId || ''}`.trim() : undefined}
          className={cn(
            "inline-flex h-9 items-center justify-between gap-2 rounded-lg border-2 border-input-border bg-card px-3 text-xs font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            selectedCount > 0 && "border-accent pr-2",
            open && "ring-2 ring-ring"
          )}
        >
          <span className="truncate">
            {!hideInlineLabel && <span className="text-muted-foreground mr-1.5">{label}:</span>}
            <span>{selectedCount > 0 ? `${selectedCount} selected` : 'All'}</span>
          </span>
          {selectedCount > 0 && onClear ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onClear()
              }}
              aria-label={clearLabel || `Clear ${label} selection`}
              className="ml-1 flex size-4 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="size-3" />
            </button>
          ) : (
            <ChevronDown className="size-3.5 opacity-60" />
          )}
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            side={side}
            sideOffset={4}
            avoidCollisions={avoidCollisions}
            className={cn(
              "z-50 min-w-[200px] max-w-[320px] rounded-lg border-2 border-border bg-popover p-2 text-popover-foreground shadow-[var(--shadow-md)] outline-none animate-in fade-in-0 zoom-in-95",
              contentClassName
            )}
          >
            {showSearch && (
              <div className="mb-2 px-1">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full rounded-md border border-input-border bg-input px-2.5 py-1 font-mono text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-ring"
                />
              </div>
            )}

            <div className={cn("max-h-56 overflow-y-auto space-y-1", listClassName)}>
              {filteredOptions.length === 0 ? (
                <div className="px-2 py-3 text-center text-xs text-muted-foreground">
                  {emptyText}
                </div>
              ) : effectiveGroups ? (
                effectiveGroups.map((group) => (
                  <div key={group.label} className="pt-1 first:pt-0">
                    <div className="px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {group.label}
                    </div>
                    {group.items.map((opt) => {
                      const isChecked = selected.has(opt)
                      const displayText = formatOption ? formatOption(opt) : opt
                      return (
                        <label
                          key={opt}
                          className="flex cursor-pointer select-none items-center gap-2 rounded px-2 py-1.5 text-xs hover:bg-muted"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => onToggle(opt)}
                            className="size-3.5 rounded border-2 border-input-border text-accent focus:ring-accent"
                          />
                          <span className="truncate">{displayText}</span>
                        </label>
                      )
                    })}
                  </div>
                ))
              ) : (
                filteredOptions.map((opt) => {
                  const isChecked = selected.has(opt)
                  const displayText = formatOption ? formatOption(opt) : opt
                  return (
                    <label
                      key={opt}
                      className="flex cursor-pointer select-none items-center gap-2 rounded px-2 py-1.5 text-xs hover:bg-muted"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onToggle(opt)}
                        className="size-3.5 rounded border-2 border-input-border text-accent focus:ring-accent"
                      />
                      <span className="truncate">{displayText}</span>
                    </label>
                  )
                })
              )}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </div>
    </PopoverPrimitive.Root>
  )
}
