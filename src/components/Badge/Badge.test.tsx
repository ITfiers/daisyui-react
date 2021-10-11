import { Badge } from "./Badge";
import { render, screen } from "@testing-library/react";

describe("components/Badge", () => {
  it("should render the children when they are passed", () => {
    render(<Badge>badge</Badge>);

    const element = screen.getByText(/badge/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("badge");
  });

  it("should render the badge", () => {
    render(<Badge>badge</Badge>);
    const element = screen.getByText(/badge/i);

    expect(element).toHaveClass("badge");
  });

  it("should render the badge depending on the badge type", () => {
    render(<Badge badgeType="secondary">badge</Badge>);

    const element = screen.getByText(/badge/i);

    expect(element).toHaveClass("badge-secondary");
  });
  it("should render badge according to its size", () => {
    render(<Badge size="small">badge</Badge>);

    const element = screen.getByText(/badge/i);

    expect(element).toHaveClass("badge-sm");
  });
  it("should render badge according to its size", () => {
    render(<Badge size="small">badge</Badge>);

    const element = screen.getByText(/badge/i);

    expect(element).toHaveClass("badge-sm");
  });

  it("should show outline variant when outline is passed", () => {
    render(<Badge variant="outlined">badge</Badge>);
    const element = screen.getByText(/badge/i);

    expect(element).toHaveClass("badge-outline");
  });
});
