import { Select } from "./Select";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/Select", () => {
  it("should render the correct color according to the prop", () => {
    render(
      <Select color="primary">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    );

    const selectElement = screen.getByRole("combobox");

    expect(selectElement).toHaveClass("select-primary");
  });

  it("should render the correct size according to the prop", () => {
    render(
      <Select size="large">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    );

    const selectElement = screen.getByRole("combobox");

    expect(selectElement).toHaveClass("select-lg");
  });

  it("should render the bordered variant when bordered is passed", () => {
    render(
      <Select bordered>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    );

    const selectElement = screen.getByRole("combobox");

    expect(selectElement).toHaveClass("select-bordered");
  });

  it("should change the select ", () => {
    render(
      <Select bordered>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    );

    const selectElement = screen.getByRole("combobox");
    const options = selectElement.children as any;
    userEvent.selectOptions(selectElement, ["2"]);

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();

    userEvent.selectOptions(selectElement, ["1"]);

    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });
});
