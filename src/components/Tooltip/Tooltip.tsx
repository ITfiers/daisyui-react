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

const tooltipColor: Record<string, string> = {
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error",
};

const tooltipPosition: Record<string, string> = {
  top: "tooltip-top",
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right",
};

export function Tooltip({
  alwaysOpen,
  position,
  color,
  text,
  children,
}: TooltipProps) {
  const classes = classNames("tooltip", {
    ["tooltip-open" as string]: Boolean(alwaysOpen),
    [tooltipPosition[position as string]]: Boolean(position),
    [tooltipColor[color as string]]: Boolean(color),
  });

  return (
    <div data-tip={text} className={classes} role="tooltip">
      {children}
    </div>
  );
}
