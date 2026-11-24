import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-border-focus focus-visible:ring-2 focus-visible:ring-border-focus/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-surface-action text-text-on-action hover:bg-surface-action-hover hover:text-text-primary shadow-md",
        primary:
          "bg-surface-action text-text-on-action hover:bg-surface-action-hover hover:text-text-primary shadow-md",
        gold:
          "bg-surface-action-gold text-text-on-gold border border-gold-400 hover:bg-surface-action-gold-hover hover:text-text-on-gold hover:border-gold-300 shadow-xl font-semibold tracking-widest uppercase",
        "outline-gold":
          "bg-plum-950/80 backdrop-blur-md border-2 border-gold-400 text-gold-200 hover:bg-surface-action-gold hover:text-text-on-gold hover:border-surface-action-gold shadow-xl font-semibold tracking-widest uppercase",
        glass:
          "bg-plum-950/50 backdrop-blur-md border border-gold-400/40 text-gold-200 hover:bg-surface-action-gold hover:text-text-on-gold hover:border-surface-action-gold shadow-xl tracking-widest uppercase",
        outline:
          "border border-border-default bg-transparent text-text-primary hover:bg-surface-secondary hover:text-text-primary",
        secondary:
          "bg-surface-secondary text-text-primary hover:bg-surface-tertiary",
        ghost:
          "hover:bg-surface-secondary hover:text-text-primary",
        link:
          "text-text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-auto py-3 px-6 text-xs uppercase tracking-widest font-sans font-semibold",
        sm:
          "h-auto py-2 px-4 text-xs uppercase tracking-widest font-sans font-medium",
        lg:
          "h-auto py-4 px-8 text-xs uppercase tracking-widest font-sans font-bold",
        icon:
          "size-8 p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
