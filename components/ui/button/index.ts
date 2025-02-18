import {cva, type VariantProps} from "class-variance-authority";

export {default as Button} from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center gap-x-2 justify-center whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-blue text-white hover:text-white",
        destructive: "bg-red-500",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
        secondary: "bg-gradient-blue-o text-blue-600",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-slate-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-14 px-6 py-2 rounded-2xl",
        xs: "h-7 px-2",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
