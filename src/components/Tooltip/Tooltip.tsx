import classNames from "classnames";

export interface TooltipProps {
  alwaysOpen?: boolean;
  position?: "top" | "bottom" | "left" | "right";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  text: string;
  children: React.ReactNode;
}

export function Tooltip({
  alwaysOpen,
  position,
  color,
  text,
  children,
}: TooltipProps) {
  const classes = classNames("tooltip", {
    ["tooltip-open" as string]: Boolean(alwaysOpen),
    [`tooltip-${position}` as string]: Boolean(position),
    [`tooltip-${color}` as string]: Boolean(color),
  });

  return (
    <div data-tip={text} className={classes} role="tooltip">
      {children}
    </div>
  );
}
