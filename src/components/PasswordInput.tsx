import { useState } from 'react'
import { Input } from '@/primitives/Input'

export interface PasswordInputProps {
  id?: string
  value: string
  onChange: (value: string) => void
  autoComplete?: string
  placeholder?: string
  showAriaLabel?: string
  hideAriaLabel?: string
  onEnter?: () => void
  className?: string
  required?: boolean
}

export function PasswordInput({
  id,
  value,
  onChange,
  autoComplete = "current-password",
  placeholder = "Enter password",
  showAriaLabel = "Show password",
  hideAriaLabel = "Hide password",
  onEnter,
  className,
  required = false,
}: PasswordInputProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <Input
        id={id}
        type={show ? 'text' : 'password'}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && onEnter) onEnter()
        }}
        placeholder={placeholder}
        className={`pr-10 ${className || ''}`}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? hideAriaLabel : showAriaLabel}
        aria-pressed={show}
        className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-muted-foreground transition hover:text-foreground"
      >
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.03 10.03 0 0 0 3.3-4.38 1.65 1.65 0 0 0 0-1.185A10.005 10.005 0 0 0 9.999 3a9.96 9.96 0 0 0-4.512 1.074L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z" />
            <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path
              fillRule="evenodd"
              d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
