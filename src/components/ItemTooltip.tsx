import React from 'react'
import { GlassPanel } from '@/primitives/GlassPanel'
import { cn } from '@/lib/utils'

export interface ItemTooltipCardProps extends React.ComponentPropsWithoutRef<typeof GlassPanel> {
  width?: number
}

export function ItemTooltipCard({ width, className, children, ...props }: ItemTooltipCardProps) {
  return (
    <GlassPanel
      style={{ '--tooltip-width': width ? `${width}px` : 'auto' } as React.CSSProperties}
      className={cn('flex flex-col p-3 shadow-[var(--shadow-lg)] md:w-[var(--tooltip-width)] max-md:w-full relative', className)}
      {...props}
    >
      {children}
    </GlassPanel>
  )
}

export interface ItemTooltipHeaderProps {
  title: string
  subtitle?: React.ReactNode
  statusBadge?: React.ReactNode
}

export function ItemTooltipHeader({ title, subtitle, statusBadge }: ItemTooltipHeaderProps) {
  return (
    <div className="flex flex-col">
      <h3 className="font-header text-xl text-foreground leading-[0.85] pb-1 break-words">
        {title || 'Untitled'}
      </h3>
      {statusBadge && <div className="mt-1">{statusBadge}</div>}
      {subtitle && (
        <div className="text-xs text-muted-foreground font-mono mt-0.5">
          {subtitle}
        </div>
      )}
    </div>
  )
}
