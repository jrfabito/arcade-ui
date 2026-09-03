import { cn } from '@/lib/utils'

export interface ConnectionBannerProps {
  status: 'offline' | 'synced' | 'online'
  offlineLabel?: string
  syncedLabel?: string
  className?: string
}

export function ConnectionBanner({
  status,
  offlineLabel = "Offline — changes save locally",
  syncedLabel = "All changes synced",
  className,
}: ConnectionBannerProps) {
  if (status === 'online') return null

  const isOffline = status === 'offline'
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed left-1/2 top-16 z-30 -translate-x-1/2 rounded-lg border-2 px-4 py-1.5 text-sm font-semibold shadow-[var(--shadow-sm)] backdrop-blur",
        isOffline
          ? "border-border bg-primary text-primary-foreground"
          : "border-accent bg-accent text-accent-foreground",
        className
      )}
    >
      {isOffline ? offlineLabel : syncedLabel}
    </div>
  )
}
