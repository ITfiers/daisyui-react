import classNames from "classnames";

export interface DrawerProps {
  children: React.ReactNode;
  className?: string;
}

export function Drawer({ className, children }: DrawerProps) {
  const classes = classNames("drawer", {
    [className!]: className,
  });

  return (
    <div className={classes}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
}

interface DrawerToggleProps {
  children: React.ReactNode;
  className?: string;
}

export function DrawerToggle({ children, className }: DrawerToggleProps) {
  const classes = classNames("drawer-button", {
    [className!]: className,
  });

  return (
    <label htmlFor="my-drawer" className={classes}>
      {children}
    </label>
  );
}

interface DrawerContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DrawerContent({ className, children }: DrawerContentProps) {
  const classes = classNames("drawer-content", {
    [className!]: className,
  });
  return <div className={classes}>{children}</div>;
}

interface DrawerSideProps {
  children: React.ReactNode;
}

export function DrawerSide({ children }: DrawerSideProps) {
  return (
    <div className="drawer-side min-w-max">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <div className="overflow-y-auto max-w-52 bg-gray-800 h-screen">
        {children}
      </div>
    </div>
  );
}
