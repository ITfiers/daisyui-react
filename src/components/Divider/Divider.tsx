export interface DividerProps {
  children?: React.ReactNode;
}

export function Divider({ children }: DividerProps) {
  return (
    <div className="divider" role="separator">
      {children}
    </div>
  );
}
