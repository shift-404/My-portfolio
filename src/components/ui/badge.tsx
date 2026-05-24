import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors duration-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-accent/10 text-accent-light hover:bg-accent/20",
        secondary:
          "border-border bg-card text-muted-foreground",
        outline:
          "border-border text-foreground",
        glow:
          "border-accent/30 bg-accent/10 text-accent-light shadow-[0_0_10px_rgba(139,92,246,0.1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
