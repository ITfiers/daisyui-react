import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("components/Links", () => {
  it("should render the children when they are passed", () => {
    render(<Link href="/">Its just a simple link</Link>);
    const element = screen.getByText(/Its just a simple link/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("link");
  });
  it("should render the color when they are passed", () => {
    render(
      <Link href="/" color="accent">
        Its just a simple link
      </Link>
    );
    const element = screen.getByText(/Its just a simple link/i);

    expect(element).toHaveClass("link-accent");
  });
  it("should render the same link passed as href prop", () => {
    render(<Link href="/">It is a NextLink</Link>);
    const linkElement = screen.getByText(/It is a NextLink/i);
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
