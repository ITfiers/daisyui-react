import { Card, CardProps } from "./Card";
import { CardImage } from "./Sub-Components/CardImage";
import { CardContent } from "./Sub-Components/CardContent";
import { CardActions } from "./Sub-Components/CardActions";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button/Button";

function generateTemplate(props: Omit<CardProps, "children">): JSX.Element {
  return (
    <Card {...props}>
      <CardImage src="https://picsum.photos/id/1002/400/250" alt="test image" />
      <CardContent title="Top Image" badgeText="New">
        Test Text
      </CardContent>
      <CardActions>
        <Button buttonType="primary">Login</Button>
      </CardActions>
    </Card>
  );
}

describe("components/Card", () => {
  it("should render the children when they are passed", () => {
    render(generateTemplate({}));

    const titleElement = screen.getByText(/Top Image/i);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("card-title");

    const badgeElement = screen.getByText(/New/i);
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("badge");

    expect(badgeElement).toBeInTheDocument();

    const buttonElement = screen.getByText(/Login/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn-primary");

    const imageElement = screen.getByAltText("test image");
    expect(imageElement).toBeInTheDocument();
  });
});

describe("components/Card", () => {
  it("should not render the image", () => {
    render(generateTemplate({ imagePosition: "none" }));
    expect(() => screen.getByAltText("test image")).toThrow();
  });
});

describe("components/Card", () => {
  it("should render the image on bottom", () => {
    render(generateTemplate({ imagePosition: "bottom" }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    const cardElementLastChild = cardElemet?.lastElementChild?.children[0];
    expect(cardElementLastChild).toHaveAttribute("alt");
    expect(cardElemet).not.toHaveClass("lg:card-side");
  });
});

describe("components/Card", () => {
  it("should render the image on top", () => {
    render(generateTemplate({ imagePosition: "top" }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    const cardElemetFirstChild = cardElemet?.firstChild?.firstChild;
    expect(cardElemetFirstChild).toHaveAttribute("alt");
    expect(cardElemet).not.toHaveClass("lg:card-side");
  });
});

describe("components/Card", () => {
  it("should render the image on left", () => {
    render(generateTemplate({ imagePosition: "left" }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    expect(cardElemet).toHaveClass("lg:card-side");
  });
});

describe("components/Card", () => {
  it("should render the shadow extra-large shadow", () => {
    render(generateTemplate({ shadow: "extra-large" }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    expect(cardElemet).toHaveClass("shadow-xl");
  });
});

describe("components/Card", () => {
  it("should render card with secondary bg color", () => {
    render(generateTemplate({ cardBg: "secondary" }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    expect(cardElemet).toHaveClass("bg-secondary text-secondary-content");
  });
});

describe("components/Card", () => {
  it("should render card with glass effect", () => {
    render(generateTemplate({ glassCard: true }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    expect(cardElemet).toHaveClass("glass");
  });
});

describe("components/Card", () => {
  it("should render Overlay Image", () => {
    render(generateTemplate({ overlayImage: true }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    expect(cardElemet).toHaveClass("image-full");
  });
});

describe("components/Card", () => {
  it("should render passed cardClasses prop", () => {
    render(generateTemplate({ cardClasses: "text-3xl" }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    expect(cardElemet).toHaveClass("text-3xl");
  });
});

describe("components/Card", () => {
  it("should render bordered card", () => {
    render(generateTemplate({ isBordered: true }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    expect(cardElemet).toHaveClass("bordered");
  });
});

describe("components/Card", () => {
  it("should render centerAlign text in the card", () => {
    render(generateTemplate({ centerAlign: true }));
    const cardElemet = screen.getByAltText("test image")?.parentElement
      ?.parentElement;
    expect(cardElemet).toHaveClass("text-center");
  });
});
