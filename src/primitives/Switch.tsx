import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

/** Pill switch; the "on" track is lime, the knob is a white square-ish dot. */
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-[42px] shrink-0 items-center rounded-full outline-none transition-colors",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=unchecked]:bg-switch-off data-[state=checked]:bg-accent",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block size-[18px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.3)] transition-transform",
          "data-[state=unchecked]:translate-x-[3px] data-[state=checked]:translate-x-[21px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
