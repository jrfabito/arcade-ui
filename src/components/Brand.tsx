import * as React from 'react'
import { cn } from '@/lib/utils'

export function ArcadeMark({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 43.66 48"
      role="img"
      aria-label="Arcade Mark"
      fill="currentColor"
      className={cn("h-8 w-auto text-brand-sky dark:text-brand-lime select-none", className)}
      {...props}
    >
      <path d="M43.21,8.89c-.3-.73-.67-1.33-1.09-1.79l-5.61-5.6c-.42-.39-1-.74-1.73-1.04-.73-.3-1.4-.45-2-.45H10.89c-.61,0-1.26.15-1.97.45-.71.3-1.28.65-1.71,1.04L1.55,7.1c-.43.46-.79,1.06-1.09,1.79-.3.73-.45,1.4-.45,2v37.11h18.2c.25-.03.52-.19.81-.48.25-.25.53-.64.85-1.17.32-.53.68-1.28,1.07-2.24.28-.5.6-.75.96-.75s.68.25.96.75c.39.96.74,1.71,1.04,2.24.3.53.58.93.83,1.17.28.28.53.44.75.48h18.2V10.89c0-.6-.15-1.27-.45-2ZM8.54,28.61h-4.19v-10.05h4.19v10.05ZM39.52,28.61h-4.19v-10.05h4.19v10.05Z" />
    </svg>
  )
}
