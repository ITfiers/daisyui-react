import classNames from "classnames";

interface ButtonGroupProps {
  children: React.ReactNode;
}

export function Pagination(props: ButtonGroupProps) {
  return <div className={"btn-group"}>{props.children}</div>;
}

export interface PaginationProps {
  children: React.ReactNode;
  isActive?: boolean;
  size?: "small" | "extraSmall";
  isDisabled?: boolean;
}
const paginationSize: Record<string, string> = {
  small: "btn-sm",
  extraSmall: "btn-sm",
};

export function PaginationButton(props: PaginationProps) {
  const buttonClasses = classNames("btn", {
    "btn-active": props.isActive,
    "btn-disabled": props.isDisabled,
    [paginationSize[props.size as string]]: Boolean(props.size),
  });

  return <button className={buttonClasses}>{props.children}</button>;
}
