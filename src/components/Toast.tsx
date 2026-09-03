import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ToastProps {
  message?: React.ReactNode
  onDismiss?: () => void
  dismissAriaLabel?: string
  className?: string
}

export function Toast({
  message,
  onDismiss,
  dismissAriaLabel = "Dismiss",
  className,
}: ToastProps) {
  if (!message) return null

  return (
    <div className={cn(
      "pointer-events-none fixed inset-x-0 z-50 flex justify-center px-4 bottom-6",
      className
    )}>
      <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-foreground/90 px-5 py-3 text-sm font-medium text-background shadow-lg backdrop-blur">
        <span>{message}</span>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label={dismissAriaLabel}
            className="-mr-1 flex h-5 w-5 items-center justify-center rounded-full text-background/60 hover:bg-background/10 hover:text-background transition"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}
