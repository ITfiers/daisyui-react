import { Progress } from "./Progress";
import { render, screen } from "@testing-library/react";

describe("components/Progress", () => {
  it("should be rendering and have progress class", () => {
    render(<Progress value={50} max={100} />);

    const component = screen.getByRole("progressbar");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("progress");
  });

  it("should have the value which is passed", () => {
    render(<Progress value={50} max={100} />);

    const component = screen.getByRole("progressbar");
    expect(component).toHaveValue(50);
  });

  it("should have the max attribute value which is passed", () => {
    render(<Progress value={50} max={100} />);

    const component = screen.getByRole("progressbar");
    expect(component).toHaveAttribute("max", "100");
  });
});
