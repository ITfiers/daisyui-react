import { Checkbox } from "./Checkbox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/Checkbox", () => {
  it("should check the checkbox when user clicks", () => {
    render(<Checkbox labelText="Remember Me" id="rememberMe" />);

    const checkbox = screen.getByLabelText(/remember me/i);

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it("should render the color prop when passed", () => {
    render(
      <Checkbox labelText="Remember Me" id="rememberMe" color="secondary" />
    );
    const checkbox = screen.getByLabelText(/remember me/i);

    expect(checkbox).toHaveClass("checkbox-secondary");
  });

  it("should show disabled checkbox when disabled prop is passed", function () {
    render(<Checkbox labelText="Remember Me" id="rememberMe" disabled />);
    const checkbox = screen.getByLabelText(/remember me/i);

    expect(checkbox).toBeDisabled();
  });
  it("should render checkbox according to its size", () => {
    render(
      <Checkbox
        labelText="Remember Me"
        id="rememberMe"
        color="secondary"
        size="small"
      />
    );

    const checkbox = screen.getByLabelText(/remember me/i);

    expect(checkbox).toHaveClass("checkbox-sm");
  });
});
