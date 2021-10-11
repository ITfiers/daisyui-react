import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("components/Divider", () => {
  it("should render divider with text", () => {
    render(<Divider>test</Divider>);

    const element = screen.getByText(/test/i);

    expect(element).toHaveTextContent("test");
    expect(element).toHaveClass("divider");
  });

  it("should render divider without text", () => {
    render(<Divider></Divider>);

    const element = screen.getByRole("separator");

    expect(element).toHaveClass("divider");
  });
});
