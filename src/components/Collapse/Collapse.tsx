import classNames from "classnames";

export interface CollapseProps {
  children: React.ReactNode;
  className?: string;
  variant?: "simple" | "arrow" | "plus";
  bordered?: boolean;
  rounded?: boolean;
  alwaysOpen?: boolean;
  alwaysClose?: boolean;
}

const collapseVariant: Record<string, string> = {
  simple: "",
  arrow: "collapse-arrow",
  plus: "collapse-plus",
};

export function Collapse({
  className,
  children,
  variant,
  bordered: border,
  rounded,
  alwaysOpen,
  alwaysClose: close,
  ...props
}: CollapseProps) {
  const classes = classNames(
    "collapse",
    {
      [collapseVariant[variant!]]: variant,
      border: border,
      rounded: rounded,
      "collapse-open": alwaysOpen,
      "collapse-close": close,
    },
    className
  );

  return (
    <div className={classes} {...props}>
      <input id="collapse123" type="checkbox" />
      {children}
    </div>
  );
}

interface CollapseContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CollapseContent({ className, children }: CollapseContentProps) {
  const classes = classNames("collapse-content", {
    [className!]: className,
  });
  return <div className={classes}>{children}</div>;
}
interface CollapseTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CollapseTitle({ className, children }: CollapseTitleProps) {
  const classes = classNames("collapse-title", {
    [className!]: className,
  });
  return <div className={classes}>{children}</div>;
}
