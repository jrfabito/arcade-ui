import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/** Mono, uppercase, tight-radius status pills. */
const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-1 font-mono text-[11.5px] font-semibold uppercase leading-none tracking-[0.05em]",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground",
        accent: "bg-accent text-accent-foreground",
        soft: "bg-accent-soft text-accent-strong",
        outline: "border-[1.5px] border-foreground bg-transparent text-foreground",
        danger: "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
