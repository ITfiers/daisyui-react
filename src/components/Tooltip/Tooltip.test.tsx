import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

import { render, screen } from "@testing-library/react";

describe("components/Tooltip", () => {
  it("should render the children, when passed", () => {
    render(
      <Tooltip text="tooltip-text">
        <Button>children-text</Button>
      </Tooltip>
    );

    const element = screen.getByText(/children-text/i);
    expect(element).toBeInTheDocument();
  });

  it("should always render the tooltip", () => {
    render(
      <Tooltip text="tooltip-text" alwaysOpen={true}>
        <Button>children-text</Button>
      </Tooltip>
    );

    const element = screen.getByRole("tooltip");

    expect(element).toHaveAttribute("data-tip", "tooltip-text");
    expect(element).toHaveClass("tooltip-open");
  });

  it("should render the tooltip on hover only", () => {
    render(
      <Tooltip text="tooltip-text">
        <Button>children-text</Button>
      </Tooltip>
    );

    const element = screen.getByRole("tooltip");

    expect(element).toHaveAttribute("data-tip", "tooltip-text");
    expect(element).not.toHaveClass("tooltip-open");
  });

  it("should render tooltip with primary color", () => {
    render(
      <Tooltip color="primary" text="tooltip-text">
        <Button>children-text</Button>
      </Tooltip>
    );
    const element = screen.getByRole("tooltip");
    expect(element).toHaveAttribute("data-tip", "tooltip-text");
    expect(element).toHaveClass("tooltip-primary");
  });

  it("should render tooltip on bottom position", () => {
    render(
      <Tooltip text="tooltip-text" position="bottom">
        <Button>children-text</Button>
      </Tooltip>
    );
    const element = screen.getByRole("tooltip");
    expect(element).toHaveAttribute("data-tip", "tooltip-text");
    expect(element).toHaveClass("tooltip-bottom");
  });

  it("should render tooltip with default color and default position", () => {
    render(
      <Tooltip text="tooltip-text">
        <Button>children-text</Button>
      </Tooltip>
    );
    const element = screen.getByRole("tooltip");
    expect(element).toHaveAttribute("data-tip", "tooltip-text");
    expect(element).toHaveClass("tooltip", { exact: true });
  });
});
