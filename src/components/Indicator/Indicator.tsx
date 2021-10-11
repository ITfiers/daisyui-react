import classNames from "classnames";

export interface IndicatorProps {
  children: React.ReactNode;
  className?: string;
  position?:
    | "topStart"
    | "topCenter"
    | "topEnd"
    | "middleStart"
    | "middleCenter"
    | "middleEnd"
    | "bottomStart"
    | "bottomCenter"
    | "bottomEnd";
  color?: "primary" | "secondary";
}

const indicatorPorsition: Record<string, string> = {
  topStart: "indicator-top indicator-start badge ",
  topCenter: "indicator-top indicator-center badge ",
  topEnd: "indicator-top indicator-end badge ",
  middleStart: "indicator-middle indicator-start badge ",
  middleCenter: "indicator-middle indicator-center badge ",
  middleEnd: "indicator-middle indicator-end badge ",
  bottomStart: "indicator-bottom indicator-start badge ",
  bottomCenter: "indicator-bottom indicator-center badge ",
  bottomEnd: "indicator-bottom indicator-end badge ",
};

const indicatorColor: Record<string, string> = {
  primary: "badge-primary",
  secondary: "badge-secondary",
};

export function Indicator({
  className,
  children,
  position,
  color,
  ...props
}: IndicatorProps) {
  const Classes = classNames("indicator-item", {
    [indicatorPorsition[position!]]: position,
    [indicatorColor[color!]]: color,
  });
  return (
    <div className="indicator" {...props}>
      <div className={Classes}>{children}</div>
    </div>
  );
}
