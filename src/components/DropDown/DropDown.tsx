import classNames from "classnames";

export interface DropDownProps {
  children: React.ReactNode;
  tabIndex?: number;
  btn?: React.ReactNode;
  position?:
    | "end"
    | "top"
    | "topEnd"
    | "left"
    | "leftEnd"
    | "right"
    | "rightEnd";
  isHoverable?: boolean;
  dropDownContent?: string;
}

const dropDownPosition: Record<string, string> = {
  end: "dropdown-end",
  top: "dropdown-top",
  topEnd: "dropdown-top dropdown-end",
  left: "dropdown-left",
  leftEnd: "dropdown-left dropdown-end",
  right: "dropdown-right",
  rightEnd: "dropdown-right dropdown-end ",
};

export function DropDown(props: DropDownProps) {
  const dropDownClasses = classNames("dropdown", {
    [dropDownPosition[props.position as string]]: Boolean(props.position),
    "dropdown-hover": props.isHoverable,
  });

  return (
    <div className={dropDownClasses} data-testid="dopdown">
      {props.btn}
      <ul
        tabIndex={props.tabIndex}
        className={`shadow menu dropdown-content bg-base-100 rounded-box w-52 ${props.dropDownContent}`}
      >
        {props.children}
      </ul>
    </div>
  );
}
export interface DropDownItemProps
  extends React.AllHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export function DropDownItem(props: DropDownItemProps) {
  return (
    <li {...props}>
      <a>{props.children}</a>
    </li>
  );
}
