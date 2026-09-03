import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

export interface DrawerShellProps {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  icon?: React.ReactNode
  closeAriaLabel?: string
  children: React.ReactNode
  className?: string
  widthClassName?: string
}

export function DrawerShell({
  open,
  onClose,
  title,
  icon,
  closeAriaLabel = "Close panel",
  children,
  className,
  widthClassName = "sm:w-80",
}: DrawerShellProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || typeof document === 'undefined') return null

  return createPortal(
    <div
      className={cn(
        "fixed inset-y-0 right-0 z-50 flex w-full flex-col border-l-2 border-border bg-popover text-popover-foreground transition-transform duration-300 ease-out",
        widthClassName,
        open ? "translate-x-0 shadow-2xl" : "translate-x-full pointer-events-none",
        className
      )}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between border-b border-border pt-[max(env(safe-area-inset-top),1rem)] pb-4 pl-[max(env(safe-area-inset-left),1rem)] pr-[max(env(safe-area-inset-right),1rem)]">
        <h2 className="flex items-center gap-2 font-header text-xl text-foreground">
          {icon}
          {title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeAriaLabel}
          className="flex size-8 items-center justify-center rounded-md text-xl leading-none text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          ×
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto pt-4 px-4 pb-[max(env(safe-area-inset-bottom),1rem)] text-sm text-muted-foreground">
        {children}
      </div>
    </div>,
    document.body
  )
}
