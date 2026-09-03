import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

export interface ModalShellProps {
  title: ReactNode
  onClose: () => void
  closeAriaLabel?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function ModalShell({
  title,
  onClose,
  closeAriaLabel = "Close",
  children,
  className,
  containerClassName,
}: ModalShellProps) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      className={cn("fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", containerClassName)}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          "flex max-h-[calc(100vh-2rem)] w-full max-w-sm flex-col overflow-hidden rounded-lg border-2 border-border bg-popover p-6 text-popover-foreground shadow-[var(--shadow-lg)]",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex shrink-0 items-start justify-between">
          <h2 className="font-header text-xl text-foreground">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeAriaLabel}
            className="-mr-1 flex h-8 w-8 items-center justify-center rounded-md text-xl leading-none text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            ×
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto pr-1.5 pb-1.5">{children}</div>
      </div>
    </div>,
    document.body
  )
}
