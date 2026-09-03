export interface PasswordRule {
  id: string
  label: string
  test: (value: string) => boolean
}

export const DEFAULT_PW_RULES: PasswordRule[] = [
  { id: 'minLength', label: 'At least 8 characters', test: (p) => p.length >= 8 },
  { id: 'maxLength', label: 'Maximum 72 characters', test: (p) => p.length <= 72 },
  { id: 'uppercase', label: 'At least one uppercase letter', test: (p) => /[A-Z]/.test(p) },
  { id: 'lowercase', label: 'At least one lowercase letter', test: (p) => /[a-z]/.test(p) },
  { id: 'number', label: 'At least one number', test: (p) => /[0-9]/.test(p) },
  { id: 'symbol', label: 'At least one symbol', test: (p) => /[^A-Za-z0-9]/.test(p) },
]

export interface PasswordChecklistProps {
  password: string
  rules?: PasswordRule[]
  className?: string
}

export function PasswordChecklist({
  password,
  rules = DEFAULT_PW_RULES,
  className,
}: PasswordChecklistProps) {
  return (
    <ul className={`mt-1.5 space-y-0.5 ${className || ''}`}>
      {rules.map((r) => {
        const ok = r.test(password)
        return (
          <li
            key={r.id}
            className={`flex items-center gap-1.5 text-xs ${
              ok ? 'text-accent-strong' : 'text-muted-foreground'
            }`}
          >
            <span aria-hidden="true">{ok ? '✓' : '○'}</span>
            {r.label}
          </li>
        )
      })}
    </ul>
  )
}
