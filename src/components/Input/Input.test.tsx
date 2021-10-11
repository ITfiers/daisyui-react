import { Input } from "./Input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/Input", () => {
  it("should change the input value when the user types", () => {
    render(<Input labelText="username" id="username" />);

    const input = screen.getByLabelText(/username/i);

    userEvent.type(input, "test");

    expect(input).toHaveValue("test");
  });

  it("should render bordered input element when bordered prop is passed", () => {
    render(<Input labelText="username" id="username" bordered />);

    const input = screen.getByLabelText(/username/i);

    expect(input).toHaveClass("input-bordered");
  });

  it("should focus the input when someone clicks", () => {
    render(<Input labelText="username" id="username" bordered />);

    const input = screen.getByLabelText(/username/i);

    userEvent.click(input);

    expect(input).toHaveFocus();
  });

  it("should disable the input when disabled prop is passed", () => {
    render(<Input labelText="username" id="username" bordered disabled />);

    const input = screen.getByLabelText(/username/i);

    expect(input).toBeDisabled();
  });

  it("should display correct size when size prop is passed", () => {
    render(<Input labelText="username" id="username" size="large" />);

    const input = screen.getByLabelText(/username/i);

    expect(input).toHaveClass("input-lg");
  });

  it("should render color when prop is given", () => {
    render(<Input labelText="username" id="username" color="primary" />);

    const input = screen.getByLabelText(/username/i);

    expect(input).toHaveClass("input-primary");
  });
});
