import classNames from "classnames";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: "large" | "small" | "medium";
  shape?: "square" | "circle";
  color?: "primary" | "secondary";
  bordered?: boolean;
  offSet?: boolean;
}

const avatarSize: Record<string, string> = {
  large: "w-24 h-24 avatar-lg",
  medium: "w-14 h-14",
  small: "w-10 h-10 avatar-sm",
};
const avatarShape: Record<string, string> = {
  square: "rounded-btn",
  circle: "rounded-full",
};

export function Avatar({
  size,
  color,
  bordered,
  shape,
  offSet,
  src,
  alt,
}: AvatarProps) {
  const classes = classNames("avatar", {
    [avatarSize[size ? size : "medium"]]: true,
    [avatarShape[shape!]]: Boolean(shape),
    [`ring-${color}`]: Boolean(color) && bordered,
    ring: bordered,
    ["ring-offset-base-100 ring-offset-2"]: offSet,
  });

  return (
    <div className="avatar">
      <div className={`mb-8 ${classes} `}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
