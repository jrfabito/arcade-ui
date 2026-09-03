import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/primitives/Select'
import { cn } from '@/lib/utils'

export interface LanguageOption {
  code: string
  label: string
}

export const DEFAULT_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'ja', label: '日本語' },
]

export interface LanguageSwitcherProps {
  value: string
  onValueChange: (lang: string) => void
  languages?: LanguageOption[]
  className?: string
}

export function LanguageSwitcher({
  value,
  onValueChange,
  languages = DEFAULT_LANGUAGES,
  className,
}: LanguageSwitcherProps) {
  return (
    <div className={cn("w-28", className)}>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="h-7 py-0 px-2 text-[11px] font-mono border-input-border bg-transparent font-medium text-muted-foreground hover:text-foreground transition focus-visible:ring-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="min-w-[100px] border-border bg-popover">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className="text-[11px] font-mono">
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
