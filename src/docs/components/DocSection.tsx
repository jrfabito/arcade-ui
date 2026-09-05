import * as React from 'react'
import { cn } from '../../lib/utils'

interface DocSectionProps {
  kicker?: string
  title: string
  description?: React.ReactNode
  children: React.ReactNode
  showDivider?: boolean
  className?: string
}

export function DocSection({
  kicker,
  title,
  description,
  children,
  showDivider = true,
  className,
}: DocSectionProps) {
  return (
    <section
      className={cn(
        'mt-16 sm:mt-20',
        showDivider && 'pt-10 border-t-2 border-border/70',
        className
      )}
    >
      <div className="mb-8 space-y-2">
        {kicker && (
          <div className="font-mono text-xs uppercase font-bold tracking-widest text-brand-lime flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-lime" />
            {kicker}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-header m-0">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-muted-foreground m-0 max-w-2xl leading-relaxed font-sans pt-1">
            {description}
          </p>
        )}
      </div>

      <div className="relative">
        {children}
      </div>
    </section>
  )
}
