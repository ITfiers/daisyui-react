import { Radio } from "./Radio";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/Radio", () => {
  it("should check the radio when the user clicks", () => {
    render(<Radio labelText="html" name="favLanguage" id="html" />);

    const radio = screen.getByLabelText(/html/i);

    userEvent.click(radio);

    expect(radio).toBeChecked();

    userEvent.click(radio);

    expect(radio).toBeChecked();
  });

  it("should disable the radio when disabled prop is passed", () => {
    render(<Radio labelText="html" name="favLanguage" id="html" disabled />);

    const radio = screen.getByLabelText(/html/i);

    expect(radio).toBeDisabled();
  });

  it("should render color when prop is given", () => {
    render(
      <Radio labelText="html" name="favLanguage" id="html" color="primary" />
    );

    const radio = screen.getByLabelText(/html/i);

    expect(radio).toHaveClass("radio-primary");
  });

  it("should only select one radio at a time", () => {
    render(
      <>
        <Radio id="html" name="favLanguage" labelText="HTML" value="HTML" />
        <Radio
          id="javascript"
          name="favLanguage"
          labelText="JavaScript"
          value="JavaScript"
        />
        <Radio id="css" name="favLanguage" labelText="CSS" value="CSS" />
      </>
    );

    const htmlRadio = screen.getByLabelText(/html/i);
    const jsRadio = screen.getByLabelText(/javascript/i);
    const cssRadio = screen.getByLabelText(/css/i);

    userEvent.click(htmlRadio);

    expect(htmlRadio).toBeChecked();
    expect(jsRadio).not.toBeChecked();
    expect(cssRadio).not.toBeChecked();

    userEvent.click(jsRadio);

    expect(htmlRadio).not.toBeChecked();
    expect(jsRadio).toBeChecked();
    expect(cssRadio).not.toBeChecked();
  });
  it("should render checkbox according to its size", () => {
    render(
      <Radio
        labelText="html"
        name="favLanguage"
        id="html"
        color="primary"
        size="small"
      />
    );

    const checkbox = screen.getByLabelText(/html/i);

    expect(checkbox).toHaveClass("radio-sm");
  });
});
