import { CollapseTitle } from "./Collapse";
import { render, screen } from "@testing-library/react";

describe("components/CollapseTitle", () => {
  it("should render the children when they are passed", () => {
    render(<CollapseTitle>testing</CollapseTitle>);

    const element = screen.getByText(/testing/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("collapse-title");
  });
});
