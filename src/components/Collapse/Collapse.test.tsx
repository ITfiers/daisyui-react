import { Collapse } from "./Collapse";
import { render, screen } from "@testing-library/react";

describe("components/Collapse", () => {
  it("should render the children when they are passed", () => {
    render(<Collapse>testing</Collapse>);

    const element = screen.getByText(/testing/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("collapse");
  });

  it("should render collapse having border", () => {
    const bordered = true;
    render(<Collapse bordered={bordered}>testing</Collapse>);
    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("border");
  });

  it("should render collapse having different variant", () => {
    render(<Collapse variant="arrow">testing</Collapse>);
    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("collapse-arrow");
  });
});
