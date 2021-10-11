import { CollapseContent } from "./Collapse";
import { render, screen } from "@testing-library/react";

describe("components/CollapseContent", () => {
  it("should render the children when they are passed", () => {
    render(<CollapseContent>testing</CollapseContent>);

    const element = screen.getByText(/testing/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("collapse-content");
  });
});
