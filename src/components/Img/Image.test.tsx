import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import { Img } from "./Img";

const fallbackUrl =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
const imageErrorUrl = "error://test";
describe("FallBackImage", () => {
  it("should render the fallback image if the main one has an error", () => {
    render(<Img src={imageErrorUrl} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", imageErrorUrl);
    fireEvent.error(image); // Here we trigger the error event
    expect(image).toHaveAttribute("src", fallbackUrl); // and check if the src changed
  });
});
