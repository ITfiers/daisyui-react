import { render, screen } from "@testing-library/react";
import { Mask } from "./Mask";

describe("component/Mask", () => {
  it("should render the image", () => {
    render(<Mask src="https://picsum.photos/id/1005/200/200" alt="image" />);
    const element = screen.getByAltText(/image/i);
    expect(element).toBeInTheDocument;
  });
  it("should render the mask with its shape", () => {
    render(
      <Mask
        src="https://picsum.photos/id/1005/200/200"
        alt="image"
        shape="triangle"
      />
    );
    const element = screen.getByAltText(/image/i);
    expect(element).toHaveClass("mask-triangle");
  });
});
