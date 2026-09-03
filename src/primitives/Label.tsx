import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

/**
 * Field label in the Arcade "flabel" style: IBM Plex Mono, uppercase, tracked
 * out. Use for form-field captions; inline toggle text stays sans (see guide).
 */
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-label select-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

export { Label }
