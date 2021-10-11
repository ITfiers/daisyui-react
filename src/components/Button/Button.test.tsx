import { Button } from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FaApple } from "react-icons/fa";

describe("components/Button", () => {
  it("should render the children when they are passed", () => {
    render(<Button>testing</Button>);

    const element = screen.getByText(/testing/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn");
  });

  it("should render the button", () => {
    render(<Button>testing</Button>);

    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("btn");
  });

  it("should render the button depending on the button type", () => {
    render(<Button buttonType="primary">testing</Button>);

    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("btn-primary");
  });

  it("should render button according to its size", () => {
    render(<Button size="large">testing</Button>);

    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("btn-lg");
  });

  it("should render fullwidth button", () => {
    render(<Button fullWidth>testing</Button>);
    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("btn-block");
  });

  it("should disable the button when disabled prop is passed", () => {
    render(<Button disabled>testing</Button>);
    const element = screen.getByText(/testing/i);

    expect(element).toBeDisabled();
  });

  it("should show loading when the loading prop is passed", () => {
    render(<Button loading>testing</Button>);
    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("loading");
  });

  it("should show outline variant when outline is passed", () => {
    render(<Button variant="outlined">testing</Button>);
    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("btn-outline");
  });

  it("should call the onClick button when it is passed", () => {
    let spy = jest.fn();
    render(
      <Button variant="outlined" onClick={spy}>
        testing
      </Button>
    );
    const element = screen.getByText(/testing/i);

    userEvent.click(element);

    expect(spy).toHaveBeenCalled();
  });

  it("should render button depending on its shape", () => {
    render(
      <Button variant="outlined" shape="circle">
        testing
      </Button>
    );
    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("btn-circle");
  });

  it("should render icon on end", () => {
    render(<Button endIcon={<FaApple />}>testing</Button>);
    const iconEnd = screen.getByTestId(/icon-end/i);

    expect(iconEnd).toBeInTheDocument();
  });

  it("should render icon on start", () => {
    render(<Button startIcon={<FaApple />}>testing</Button>);
    const startIcon = screen.getByTestId(/icon-start/i);

    expect(startIcon).toBeInTheDocument();
  });

  it("should render icon on start and end", () => {
    render(
      <Button startIcon={<FaApple />} endIcon={<FaApple />}>
        testing
      </Button>
    );

    const startIcon = screen.getByTestId(/icon-start/i);
    const iconEnd = screen.getByTestId(/icon-end/i);

    expect(startIcon).toBeInTheDocument();

    expect(iconEnd).toBeInTheDocument();
  });

  it("should accept extra className as a prop for styling", () => {
    render(
      <Button startIcon={<FaApple />} className="test">
        testing
      </Button>
    );
    const element = screen.getByText(/testing/i);

    expect(element).toHaveClass("test");
  });
});
