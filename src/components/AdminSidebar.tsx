import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface AdminSidebarItem {
  id: string
  label: string
  icon?: ReactNode
  badge?: string | number
}

export interface AdminSidebarSection {
  title?: string
  items: AdminSidebarItem[]
}

export interface AdminSidebarProps {
  sections: AdminSidebarSection[]
  activeId: string
  onSelect: (id: string) => void
  header?: ReactNode
  footer?: ReactNode
  className?: string
}

export function AdminSidebar({
  sections,
  activeId,
  onSelect,
  header,
  footer,
  className,
}: AdminSidebarProps) {
  return (
    <aside
      className={cn(
        "flex w-64 flex-col border-r-2 border-border bg-card text-card-foreground",
        className
      )}
    >
      {header && <div className="border-b border-border p-4">{header}</div>}

      <div className="flex-1 overflow-y-auto p-3 space-y-6">
        {sections.map((sec, idx) => (
          <div key={idx} className="space-y-1">
            {sec.title && (
              <p className="px-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {sec.title}
              </p>
            )}
            {sec.items.map((item) => {
              const isActive = item.id === activeId
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelect(item.id)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-semibold transition",
                    isActive
                      ? "bg-accent-soft text-accent-strong"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {footer && <div className="border-t border-border p-4">{footer}</div>}
    </aside>
  )
}
