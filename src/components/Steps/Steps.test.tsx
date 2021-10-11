import { Steps, Step } from "./Steps";
import { render, screen } from "@testing-library/react";

describe("components/Steps", () => {
  it("should render the children when they are passed", () => {
    render(<Steps>start</Steps>);

    const element = screen.getByText(/start/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("steps w-full");
  });
  it("should render the list items depending on the color type", () => {
    render(
      <Steps>
        <Step colorType="primary"> start </Step>
      </Steps>
    );

    const element = screen.getByText(/start/i);

    expect(element).toHaveClass("step-primary");
  });
});
