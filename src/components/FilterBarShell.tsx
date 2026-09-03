import { useId, type ReactNode } from 'react'
import { Button } from '@/primitives/Button'
import { Label } from '@/primitives/Label'
import { MultiSelectCheckbox } from './MultiSelectCheckbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/primitives/Select'
import { cn } from '@/lib/utils'

export interface SortOption {
  value: string
  label: string
}

export interface FacetConfig {
  key: string
  label: string
  options: string[]
  selected: Set<string>
  onToggle: (value: string) => void
  onClear: () => void
  formatOption?: (value: string) => string
}

export interface FilterBarShellProps {
  sectionLabel?: string
  sortOptions: SortOption[]
  sortValue: string
  onSortChange: (value: string) => void
  facets?: FacetConfig[]
  onClearAll?: () => void
  count?: number
  actions?: ReactNode
  logoSlot?: ReactNode
  authSlot?: ReactNode
  className?: string
}

export function FilterBarShell({
  sectionLabel,
  sortOptions,
  sortValue,
  onSortChange,
  facets = [],
  onClearAll,
  count,
  actions,
  logoSlot,
  authSlot,
  className,
}: FilterBarShellProps) {
  const sortId = useId()

  const hasActiveFacets = facets.some((f) => f.selected.size > 0)

  return (
    <div className={cn("w-full border-b border-border bg-background/80 backdrop-blur-md", className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          {logoSlot}
          {sectionLabel && (
            <h1 className="font-header text-xl text-foreground">{sectionLabel}</h1>
          )}
          {typeof count === 'number' && (
            <span className="font-mono text-xs text-muted-foreground">({count})</span>
          )}
        </div>

        {/* Desktop Filter Row */}
        <div className="hidden md:flex items-center gap-3">
          {sortOptions.length > 0 && (
            <div className="flex items-center gap-2">
              <Label htmlFor={sortId} className="font-mono text-xs uppercase text-muted-foreground">
                Sort:
              </Label>
              <Select value={sortValue} onValueChange={onSortChange}>
                <SelectTrigger id={sortId} className="h-9 w-40 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {facets.map((facet) => (
            <MultiSelectCheckbox
              key={facet.key}
              label={facet.label}
              options={facet.options}
              selected={facet.selected}
              onToggle={facet.onToggle}
              onClear={facet.onClear}
              formatOption={facet.formatOption}
            />
          ))}

          {hasActiveFacets && onClearAll && (
            <Button variant="ghost" size="sm" onClick={onClearAll} className="text-xs">
              Clear filters
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {actions}
          {authSlot}
        </div>
      </div>
    </div>
  )
}
