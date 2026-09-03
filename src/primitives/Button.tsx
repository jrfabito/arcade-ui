import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Arcade buttons. Two signatures carry the design language:
 *  - `primary` — ink face with a hard LIME offset shadow (the default action)
 *  - `hero`    — lime face with a hard INK/GRAY offset shadow (one CTA per view)
 * Both press inward on :active (the 4–5px offset collapses to 2–3px as the
 * button translates down-right). Faces use Space Grotesk (`font-display`).
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-transparent font-display font-semibold leading-none outline-none transition-[filter,transform,box-shadow,background-color,color,border-color] duration-150 disabled:pointer-events-none disabled:opacity-45 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[4px_4px_0_0_var(--primary-shadow)] hover:brightness-95 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_var(--primary-shadow)]",
        hero: "bg-hero text-hero-foreground shadow-[5px_5px_0_0_var(--hero-shadow)] hover:brightness-95 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_0_var(--hero-shadow)]",
        secondary:
          "bg-secondary text-secondary-foreground border-secondary-border hover:brightness-95 active:translate-x-[1px] active:translate-y-[1px]",
        outline:
          "border-input-border bg-transparent text-foreground hover:bg-muted active:translate-x-[1px] active:translate-y-[1px]",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        destructive:
          "bg-destructive text-destructive-foreground hover:brightness-95 active:translate-x-[1px] active:translate-y-[1px]",
        link: "text-accent-strong underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-[11px] text-sm",
        sm: "px-3.5 py-2 text-xs",
        lg: "px-6 py-3 text-base",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
