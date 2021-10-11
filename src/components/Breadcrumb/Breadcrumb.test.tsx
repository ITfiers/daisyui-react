import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "./Breadcrumb";
import { v4 as uuidv4 } from "uuid";
describe("components/Breadcrumb", () => {
  it("should render the same number of links name as passed in links prop", () => {
    render(
      <Breadcrumb
        links={[
          { id: uuidv4(), name: "Home", path: "/" },
          { id: uuidv4(), name: "About", path: "/about" },
        ]}
      />
    );
    const breadcrumbLinks = screen.getAllByRole("link");
    expect(breadcrumbLinks.length).toBe(2);
  });
  it("should render the same link path as passed in links prop", () => {
    render(<Breadcrumb links={[{ id: uuidv4(), name: "Home", path: "/" }]} />);
    const breadcrumbLink = screen.getByText(/Home/i);
    expect(breadcrumbLink).toHaveAttribute("href", "/");
  });
});
