import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("components/Avatar", () => {
  it("should render the image when they are passed", () => {
    render(
      <Avatar
        alt="avatar"
        src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
      />
    );
    const element = screen.getByAltText(/avatar/i);

    expect(element).toBeInTheDocument;
  });

  it("should render avatar according to its size", () => {
    render(
      <Avatar
        alt="avatar"
        src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
        size="medium"
      />
    );
    const element = screen.getByAltText(/avatar/i);

    expect(element.parentElement).toHaveClass("w-14 h-14");
  });
  it("should render avatar according to its shape", () => {
    render(
      <Avatar
        alt="avatar"
        src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
        shape="circle"
      />
    );
    const element = screen.getByAltText(/avatar/i);

    expect(element.parentElement).toHaveClass("rounded-full");
  });

  it("should render medium size by default", () => {
    render(
      <Avatar
        alt="avatar"
        src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
        shape="circle"
      />
    );
    const element = screen.getByAltText(/avatar/i);

    expect(element.parentElement).not.toHaveClass("avatar-lg");
    expect(element.parentElement).not.toHaveClass("avatar-sm");
    expect(element.parentElement).toHaveClass("w-14 h-14");
  });

  it("should render avatar color when bordered is passed", () => {
    render(
      <Avatar
        alt="avatar"
        src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
        size="large"
        color="primary"
      />
    );
    const element = screen.getByAltText(/avatar/i);

    expect(element.parentElement).not.toHaveClass("ring-primary");
  });

  it("should render the avatar border with color", () => {
    render(
      <Avatar
        alt="avatar"
        src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
        size="large"
        color="primary"
        bordered
      />
    );
    const element = screen.getByAltText(/avatar/i);

    expect(element.parentElement).toHaveClass("ring");
    expect(element.parentElement).toHaveClass("ring-primary");
  });

  it("should render the avatar offset", () => {
    render(
      <Avatar
        alt="avatar"
        src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
        offSet
      />
    );
    const element = screen.getByAltText(/avatar/i);

    expect(element.parentElement).toHaveClass("ring-offset-base-100");
    expect(element.parentElement).toHaveClass("ring-offset-2");
  });
});
