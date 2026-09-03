import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface GlobalNavProps {
  logo?: ReactNode
  mobileMenu?: ReactNode
  navItems?: ReactNode
  actions?: ReactNode
  className?: string
}

export function GlobalNav({
  logo,
  mobileMenu,
  navItems,
  actions,
  className,
}: GlobalNavProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex w-full items-center justify-between border-b border-border bg-[color-mix(in_srgb,var(--background)_88%,transparent)] px-6 py-3 backdrop-blur-[10px]",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {mobileMenu}
        {logo}
        {navItems && <nav className="hidden md:flex items-center gap-4">{navItems}</nav>}
      </div>
      <div className="flex items-center gap-3">
        {actions}
      </div>
    </header>
  )
}
