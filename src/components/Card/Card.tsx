import classNames from "classnames";

export interface CardProps {
  children: any[] | React.ReactElement[];
  cardClasses?: string;
  isBordered?: boolean;
  centerAlign?: boolean;
  overlayImage?: boolean;
  glassCard?: boolean;
  cardBg?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "base-100"
    | "base-200"
    | "base-300"
    | "info"
    | "success"
    | "warning"
    | "error";
  shadow?:
    | "default"
    | "small"
    | "medium"
    | "large"
    | "extra-large"
    | "double-extra-large"
    | "inner"
    | "none";
  imagePosition?: "top" | "bottom" | "left" | "none";
}

let shadowMapping = {
  default: "",
  small: "sm",
  medium: "md",
  large: "lg",
  "extra-large": "xl",
  "double-extra-large": "2xl",
  inner: "inner",
  none: "none",
};

interface ChildrenObj {
  body: React.ReactElement[];
  img: {
    position: number;
    node: React.ReactElement;
  };
}

export function Card({
  glassCard,
  imagePosition,
  cardBg,
  overlayImage,
  shadow,
  isBordered,
  centerAlign,
  children,
  cardClasses,
}: CardProps) {
  let objs: ChildrenObj = {
    body: [],
    img: {
      position: 0,
      node: <></>,
    },
  };

  children.forEach((child, index) => {
    if (child.type.name == "CardImage") {
      objs.img.node = child;
      objs.img.position = index;
    } else {
      objs.body.push(child);
    }
  });

  const classes = classNames("card", {
    [`shadow-${shadowMapping[shadow!]} ` as string]: shadow,
    "bordered ": isBordered,
    "text-center ": centerAlign,
    "image-full ": overlayImage,
    [`bg-${cardBg} text-${cardBg}-content `]: cardBg,
    "lg:card-side ": imagePosition === "left",
    "glass text-neutral-content ": glassCard,
    [cardClasses + " "]: cardClasses,
  });

  return (
    <>
      <div className={`${classes}${cardClasses ? cardClasses : ""}`}>
        {imagePosition !== "bottom" &&
        imagePosition !== "none" &&
        !!objs.img.node
          ? objs.img.node
          : ""}
        <div className={"card-body" + (overlayImage ? " justify-end" : "")}>
          {objs.body}
        </div>
        {imagePosition === "bottom" && !!objs.img.node ? objs.img.node : ""}
      </div>
    </>
  );
}
