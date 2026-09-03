import React from 'react'
import { createPortal } from 'react-dom'
import { GlassPanel } from '@/primitives/GlassPanel'

export interface ActionTooltipProps {
  x: number
  y: number
  children?: React.ReactNode
  onClose?: () => void
  closeAriaLabel?: string
}

export function ActionTooltip({
  x,
  y,
  children,
  onClose,
  closeAriaLabel = "Close",
}: ActionTooltipProps) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      className="pointer-events-auto fixed z-50 transition-all ease-out md:left-[var(--tooltip-x)] md:top-[var(--tooltip-y)] md:-translate-x-1/2 md:-translate-y-full max-md:bottom-[max(env(safe-area-inset-bottom),0px)] max-md:left-0 max-md:w-full max-md:p-4 max-md:bg-background/80 max-md:backdrop-blur-md"
      style={{
        '--tooltip-x': `${x}px`,
        '--tooltip-y': `${y}px`,
      } as React.CSSProperties}
    >
      <GlassPanel className="p-3 shadow-[var(--shadow-lg)] flex flex-col gap-2 md:min-w-[200px] max-md:w-full relative">
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden absolute top-2 right-2 p-2 text-muted-foreground hover:text-foreground bg-black/10 dark:bg-white/10 rounded-full"
            aria-label={closeAriaLabel}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
        {children}
      </GlassPanel>
    </div>,
    document.body
  )
}
