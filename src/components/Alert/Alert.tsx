import classNames from "classnames";
import { FaInfoCircle, FaFolder, FaExclamationTriangle } from "react-icons/fa";
export interface AlertProps {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "error";
}

const alertVariant: Record<string, string> = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

export function Alert(props: AlertProps) {
  const classes = classNames("alert", {
    [alertVariant[props.variant as string]]: Boolean(props.variant),
  });

  function Icon() {
    switch (props.variant) {
      case "info":
        return <FaInfoCircle data-testid="info-icon" />;
      case "success":
        return <FaFolder data-testid="success-icon" />;
      case "warning":
        return <FaExclamationTriangle data-testid="warning-icon" />;
      case "error":
      default:
        return <FaInfoCircle data-testid="error-icon" />;
    }
  }

  return (
    <div className={classes}>
      <Icon />
      {props.children}
    </div>
  );
}
