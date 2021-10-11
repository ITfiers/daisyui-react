import { Indicator } from "./Indicator";
import { render, screen } from "@testing-library/react";

describe("components/Indicator", () => {
  it("should render the children when they are passed", () => {
    render(<Indicator>testing</Indicator>);

    const element = screen.getByText(/testing/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("indicator-item");
  });

  it("should render Indicator having different badge color", () => {
    render(<Indicator color="primary">testing</Indicator>);
    const element = screen.getByText(/testing/i);
    expect(element).toHaveClass("badge-primary");
  });

  it("should render Indicator having different badge position", () => {
    render(<Indicator position="topStart">testing</Indicator>);
    const element = screen.getByText(/testing/i);
    expect(element).toHaveClass("indicator-top indicator-start badge");
  });
});
