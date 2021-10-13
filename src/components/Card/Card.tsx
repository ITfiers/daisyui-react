import classNames from "classnames";
import React from "react";

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
    | "extraLarge"
    | "doubleExtraLarge"
    | "inner"
    | "none";
  imagePosition?: "top" | "bottom" | "left" | "none";
  textContent?: "accent" | "secondary";
}

interface ChildrenObj {
  body: React.ReactElement[];
  img: {
    position: number;
    node: React.ReactElement;
  };
}

const cardColor: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  neutral: "bg-neutral",
  base100: "bg-base-100",
  base200: "bg-base-200",
  base300: "bg-base-300",
  ghost: "bg-ghost",
  link: "bg-link",
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
  success: "bg-success",
};

const shadowMapping: Record<string, string> = {
  default: "",
  small: "shadow-sm",
  medium: "shadow-md",
  large: "shadow-lg",
  extraLarge: "shadow-xl",
  doubleExtraLarge: "shadow-2xl",
  inner: "shadow-inner",
  none: "shadow-none",
};
const textContentColor: Record<string, string> = {
  accent: " text-accent-content",
  secondary: " text-secondary-content",
};

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
  textContent,
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
    [shadowMapping[shadow as string]]: shadow,
    "bordered ": isBordered,
    "text-center ": centerAlign,
    "image-full ": overlayImage,
    [cardColor[cardBg as string]]: cardBg,
    [textContentColor[textContent as string]]: textContent,
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
