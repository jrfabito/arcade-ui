import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * The one translucent surface in the Arcade system: a blurred, semi-opaque
 * card for chrome floating over imagery (e.g. the toy-properties panel over the
 * 3D stage). Everything else uses the solid `Card`.
 */
function GlassPanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-panel"
      className={cn(
        "rounded-lg border-2 border-white/50 bg-[color-mix(in_srgb,var(--card)_66%,transparent)] p-4 text-card-foreground shadow-[var(--shadow-md)] backdrop-blur-[10px]",
        className
      )}
      {...props}
    />
  )
}

export { GlassPanel }
