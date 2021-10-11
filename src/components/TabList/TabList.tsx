import classNames from "classnames";

export interface TabListProps {
  tabs: Tab[];
  variant?: "bordered" | "lifted" | "boxed";
  size?: "large" | "small" | "tiny";
}

interface Tab extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  content: string;
  isActive?: boolean;
}

enum TabSizes {
  large = "tab-lg",
  small = "tab-sm",
  tiny = "tab-xs",
}

export function TabList({ tabs, size, variant }: TabListProps) {
  const tabListClasses = classNames("tabs", {
    "tabs-boxed": variant === "boxed",
  });

  return (
    <div role="tabpanel" className={tabListClasses}>
      {tabs.map(({ content, isActive }) => {
        const tabClasses = classNames("tab", {
          "tab-active": isActive,
          [TabSizes[size!]]: size,
          [`tab-${variant}`]: variant === "bordered" || variant === "lifted",
        });

        return (
          <a role="tab" key={content} className={tabClasses}>
            {content}
          </a>
        );
      })}
    </div>
  );
}
