interface CardActionsProps {
  classes?: string;
  centerAlign?: Boolean;
  children: React.ReactNodeArray | React.ReactNode;
}

export function CardActions({
  centerAlign,
  classes,
  children,
  ...props
}: CardActionsProps) {
  return (
    <div
      className={`card-actions ${centerAlign ? "justify-center" : ""} ${
        classes ? classes : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
