interface CardContentProps {
  title?: string;
  badgeText?: string;
  BadgeVariant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  children: React.ReactChild;
}

export function CardContent({
  title,
  badgeText,
  BadgeVariant,
  children,
}: CardContentProps) {
  return (
    <>
      {title && (
        <h2 className="card-title">
          {title}
          {badgeText && (
            <div className={`badge mx-2 badge-${BadgeVariant || "primary"}`}>
              {badgeText}
            </div>
          )}
        </h2>
      )}
      <p>{children}</p>
    </>
  );
}
