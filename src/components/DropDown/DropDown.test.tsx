import { render, screen } from "@testing-library/react";

import { DropDown, DropDownItem } from "./DropDown";

describe("components/DropDown", () => {
  it("should render the children when they are passed", () => {
    render(<DropDown>testing</DropDown>);

    const element = screen.getByText(/testing/i);

    expect(element).toBeInTheDocument();
  });
  it("should render the DropDown items", () => {
    render(<DropDownItem>testing</DropDownItem>);

    const element = screen.getByText(/testing/i);

    expect(element).toBeInTheDocument();
  });
  it("should render the dropdown according to its position", () => {
    render(<DropDown position="right">testing</DropDown>);
    const element = screen.getByTestId("dopdown");

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("dropdown dropdown-right");
  });
  it("should accept extra className as a prop for styling", () => {
    render(<DropDown dropDownContent="test">testing</DropDown>);
    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("test");
  });
});
