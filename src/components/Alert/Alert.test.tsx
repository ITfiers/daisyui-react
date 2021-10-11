import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";

describe("components/Alert", () => {
  it("should render the children when they are passed", () => {
    render(<Alert>Lorem ipsum dolor sit amet, consectetur adip!</Alert>);

    const element = screen.getByText(
      /Lorem ipsum dolor sit amet, consectetur adip!/i
    );

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("alert");
  });

  it("should render the alert", () => {
    render(<Alert>Lorem ipsum dolor sit amet, consectetur adip!</Alert>);

    const element = screen.getByText(
      /Lorem ipsum dolor sit amet, consectetur adip!/i
    );

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("alert");
  });
  it("should show variant when variant is passed", () => {
    render(
      <Alert variant="warning">
        Lorem ipsum dolor sit amet, consectetur adip!
      </Alert>
    );

    const element = screen.getByText(
      /Lorem ipsum dolor sit amet, consectetur adip!/i
    );
    expect(element).toHaveClass("alert-warning");
  });

  it("should render the info icon for info variant", () => {
    render(<Alert variant="info">info</Alert>);
    const infoIcon = screen.getByTestId("info-icon");
    expect(infoIcon).toBeVisible();
  });
  it("should render the success icon for success variant", () => {
    render(<Alert variant="success">success</Alert>);
    const successIcon = screen.getByTestId("success-icon");
    expect(successIcon).toBeVisible();
  });
  it("should render the warning icon for warning variant", () => {
    render(<Alert variant="warning">warning</Alert>);
    const warningIcon = screen.getByTestId("warning-icon");
    expect(warningIcon).toBeVisible();
  });
  it("should render the error icon for error variant", () => {
    render(<Alert variant="error">error</Alert>);
    const errorIcon = screen.getByTestId("error-icon");
    expect(errorIcon).toBeVisible();
  });
});
