import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toggle } from "./Toggle";

describe("components/Toggle", () => {
  it("should check the toggle when user clicks", () => {
    render(<Toggle id="remember" labelText="Remember Me" />);
    const toggle = screen.getByLabelText(/remember me/i);
    userEvent.click(toggle);

    expect(toggle).toBeChecked();

    userEvent.click(toggle);

    expect(toggle).not.toBeChecked();
  });
  it("should render the color prop when passed", () => {
    render(<Toggle id="remember" labelText="Remember Me" color="primary" />);
    const toggle = screen.getByLabelText(/remember me/i);
    expect(toggle).toHaveClass("toggle-primary");
  });
  it("should show disabled toggle when disabled prop is passed", function () {
    render(
      <Toggle id="remember" labelText="Remember Me" color="primary" disabled />
    );
    const toggle = screen.getByLabelText(/remember me/i);

    expect(toggle).toBeDisabled();
  });
  it("should render checkbox according to its size", () => {
    render(
      <Toggle
        id="remember"
        labelText="Remember Me"
        color="primary"
        size="small"
      />
    );

    const checkbox = screen.getByLabelText(/remember me/i);

    expect(checkbox).toHaveClass("toggle-sm");
  });
});
