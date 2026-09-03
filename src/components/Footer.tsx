import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SocialLinkItem {
  id: string
  label: string
  url: string
  icon?: ReactNode
}

export interface FooterProps {
  copyright?: string
  socialLinks?: SocialLinkItem[]
  legalLinks?: ReactNode
  languageSwitcher?: ReactNode
  className?: string
}

export function Footer({
  copyright = `© ${new Date().getFullYear()} Paper Critters`,
  socialLinks = [],
  legalLinks,
  languageSwitcher,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full border-t border-border bg-[color-mix(in_srgb,var(--background)_88%,transparent)] px-6 py-3.5 backdrop-blur-[10px]",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p className="font-mono text-[11px] font-medium">{copyright}</p>

        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="transition hover:text-foreground"
            >
              {link.icon || link.label}
            </a>
          ))}

          {socialLinks.length > 0 && legalLinks && (
            <span className="select-none font-mono text-[11px] text-muted-foreground/40">|</span>
          )}

          {legalLinks}

          {languageSwitcher && (
            <>
              <span className="select-none font-mono text-[11px] text-muted-foreground/40">|</span>
              {languageSwitcher}
            </>
          )}
        </div>
      </div>
    </footer>
  )
}
