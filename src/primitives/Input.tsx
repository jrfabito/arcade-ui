import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Arcade text input: 2px ink border by default, lime ring on focus, coral ring
 * when `aria-invalid` is set. 6px corners, IBM Plex Sans face.
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex w-full rounded-lg border-2 border-input-border bg-input px-[13px] py-2.5 text-sm text-card-foreground",
        "placeholder:text-muted-foreground",
        "outline-none transition-[color,box-shadow,border-color]",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring-soft",
        "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive-soft",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Input }
