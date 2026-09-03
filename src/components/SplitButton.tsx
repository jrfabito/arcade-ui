import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/primitives/DropdownMenu"

export const splitButtonWrapperVariants = cva(
  "inline-flex items-stretch rounded-lg border-2 border-transparent transition-[filter,transform,box-shadow,border-color,opacity] duration-150 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary shadow-[4px_4px_0_0_var(--primary-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_var(--primary-shadow)]",
        hero: "bg-hero shadow-[5px_5px_0_0_var(--hero-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_0_var(--hero-shadow)]",
        secondary:
          "bg-secondary border-secondary-border active:translate-x-[1px] active:translate-y-[1px]",
        outline:
          "bg-transparent border-input-border active:translate-x-[1px] active:translate-y-[1px]",
        ghost: "bg-transparent",
        destructive:
          "bg-destructive active:translate-x-[1px] active:translate-y-[1px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export const splitButtonMainVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-l-[6px] font-display font-semibold leading-none outline-none transition-[filter,background-color,color] duration-150 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:brightness-125",
        hero: "bg-hero text-hero-foreground hover:brightness-90",
        secondary: "bg-secondary text-secondary-foreground hover:brightness-90",
        outline: "bg-transparent text-foreground hover:bg-muted",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        destructive:
          "bg-destructive text-destructive-foreground hover:brightness-90",
      },
      size: {
        default: "px-5 py-[11px] text-sm [&_svg]:size-4",
        sm: "px-3.5 py-2 text-xs [&_svg]:size-3.5",
        lg: "px-6 py-3 text-base [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export const splitButtonTriggerVariants = cva(
  "inline-flex items-center justify-center rounded-r-[6px] outline-none transition-[filter,background-color,color] duration-150 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=open]:brightness-90",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:brightness-125",
        hero: "bg-hero text-hero-foreground hover:brightness-90",
        secondary: "bg-secondary text-secondary-foreground hover:brightness-90",
        outline:
          "bg-transparent text-foreground hover:bg-muted data-[state=open]:bg-muted",
        ghost:
          "bg-transparent text-foreground hover:bg-muted data-[state=open]:bg-muted",
        destructive:
          "bg-destructive text-destructive-foreground hover:brightness-90",
      },
      size: {
        default: "px-2.5 py-[11px]",
        sm: "px-2 py-2",
        lg: "px-3.5 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export const splitButtonDividerVariants = cva("w-[2px] shrink-0 self-stretch", {
  variants: {
    variant: {
      primary: "bg-primary-foreground/25",
      hero: "bg-hero-foreground/20",
      secondary: "bg-secondary-border",
      outline: "bg-input-border",
      ghost: "bg-border",
      destructive: "bg-destructive-foreground/25",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

const iconSizes = {
  default: "size-4",
  sm: "size-3.5",
  lg: "size-5",
}

export interface SplitButtonItem {
  label: React.ReactNode
  icon?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  disabled?: boolean
  destructive?: boolean
  separator?: boolean
}

export interface SplitButtonProps
  extends Omit<React.ComponentProps<"button">, "onClick" | "size"> {
  variant?: VariantProps<typeof splitButtonWrapperVariants>["variant"]
  size?: VariantProps<typeof splitButtonMainVariants>["size"]
  label: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  items?: SplitButtonItem[]
  children?: React.ReactNode
  dropdownContentProps?: React.ComponentProps<typeof DropdownMenuContent>
  wrapperClassName?: string
}

export function SplitButton({
  className,
  wrapperClassName,
  variant = "primary",
  size = "default",
  label,
  onClick,
  disabled = false,
  items,
  children,
  dropdownContentProps,
  ...props
}: SplitButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      data-slot="split-button"
      data-disabled={disabled}
      className={cn(
        splitButtonWrapperVariants({ variant }),
        disabled && "pointer-events-none opacity-45",
        wrapperClassName
      )}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={cn(splitButtonMainVariants({ variant, size }), className)}
        {...props}
      >
        {label}
      </button>

      <span className={cn(splitButtonDividerVariants({ variant }))} />

      <DropdownMenu onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            disabled={disabled}
            aria-label="More options"
            className={cn(splitButtonTriggerVariants({ variant, size }))}
          >
            {isOpen ? (
              <ChevronUp
                className={cn("shrink-0", iconSizes[size || "default"])}
              />
            ) : (
              <ChevronDown
                className={cn("shrink-0", iconSizes[size || "default"])}
              />
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" {...dropdownContentProps}>
          {items?.map((item, index) => {
            if (item.separator) {
              return <DropdownMenuSeparator key={index} />
            }
            return (
              <DropdownMenuItem
                key={index}
                disabled={item.disabled}
                variant={item.destructive ? "destructive" : "default"}
                onClick={item.onClick}
              >
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
              </DropdownMenuItem>
            )
          })}
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
