import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: [
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground",
            "group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            "group-[.toaster]:rounded-lg group-[.toaster]:p-6",
            "group-[.toaster]:animate-in group-[.toaster]:fade-in-0 group-[.toaster]:slide-in-from-bottom-4",
          ].join(" "),
          title: "group-[.toast]:text-lg group-[.toast]:font-semibold",
          description:
            "group-[.toast]:text-sm group-[.toast]:text-muted-foreground group-[.toast]:mt-1",
          actionButton: [
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            "group-[.toast]:rounded-md group-[.toast]:px-3 group-[.toast]:py-2",
            "group-[.toast]:text-sm group-[.toast]:font-medium",
            "group-[.toast]:transition-colors",
            "group-[.toast]:hover:bg-primary/90",
          ].join(" "),
          cancelButton: [
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            "group-[.toast]:rounded-md group-[.toast]:px-3 group-[.toast]:py-2",
            "group-[.toast]:text-sm group-[.toast]:font-medium",
            "group-[.toast]:transition-colors",
            "group-[.toast]:hover:bg-muted/90",
          ].join(" "),
          closeButton: [
            "group-[.toast]:text-foreground/50 group-[.toast]:opacity-0 group-[.toast]:transition-opacity",
            "group-[.toast]:hover:text-foreground group-[.toast]:focus:opacity-100",
            "group-[.toast]:group-hover:opacity-100",
          ].join(" "),
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
