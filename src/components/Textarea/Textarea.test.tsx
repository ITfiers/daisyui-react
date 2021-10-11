import { Textarea } from "./Textarea";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/Textarea", () => {
  it("should change the textarea value when the user types", () => {
    render(<Textarea labelText="content" id="content" />);

    const textarea = screen.getByLabelText(/content/i);

    userEvent.type(textarea, "test");

    expect(textarea).toHaveValue("test");
  });

  it("should render bordered textarea when bordered prop is passed", () => {
    render(<Textarea labelText="content" id="content" bordered />);

    const textarea = screen.getByLabelText(/content/i);

    expect(textarea).toHaveClass("textarea-bordered");
  });

  it("should focus the textarea when someone clicks", () => {
    render(<Textarea labelText="content" id="content" bordered />);

    const textarea = screen.getByLabelText(/content/i);

    userEvent.click(textarea);

    expect(textarea).toHaveFocus();
  });

  it("should disable the textarea when disabled prop is passed", () => {
    render(<Textarea labelText="content" id="content" bordered disabled />);

    const textarea = screen.getByLabelText(/content/i);

    expect(textarea).toBeDisabled();
  });

  it("should render color when prop is given", () => {
    render(<Textarea labelText="content" id="content" color="primary" />);

    const textarea = screen.getByLabelText(/content/i);

    expect(textarea).toHaveClass("textarea-primary");
  });
});
