import * as React from 'react'
import { createPortal } from 'react-dom'
import { X, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface MobileMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  logo?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function MobileMenu({
  open,
  onOpenChange,
  logo,
  children,
  footer,
  className,
}: MobileMenuProps) {
  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        aria-label="Open menu"
        className="flex md:hidden size-9 items-center justify-center rounded-lg border-2 border-input-border bg-card text-foreground transition hover:bg-muted"
      >
        <Menu className="size-5" />
      </button>

      {open && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md animate-in fade-in-0 duration-200">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div>{logo}</div>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Close menu"
              className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className={cn("flex-1 overflow-y-auto px-6 py-6 space-y-4", className)}>
            {children}
          </div>

          {footer && (
            <div className="border-t border-border px-6 py-4 bg-card/50">
              {footer}
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  )
}
