import { render, screen } from "@testing-library/react";
import { Pagination, PaginationButton } from "./Pagination";

describe("components/Pagination", () => {
  it("should render the children when they are passed", () => {
    render(<Pagination>start</Pagination>);

    const element = screen.getByText(/start/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-group");
  });

  it("should render the button with active mode", () => {
    render(<PaginationButton isActive>Previous</PaginationButton>);

    const element = screen.getByText(/previous/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-active");
  });
  it("should render the button with disable mode", () => {
    render(<PaginationButton isDisabled>previous</PaginationButton>);

    const element = screen.getByText(/previous/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-disabled");
  });
});
