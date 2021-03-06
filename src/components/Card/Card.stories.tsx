import { Meta, Story } from "@storybook/react";
import { Card, CardProps } from "./Card";
import { CardImage } from "./Sub-Components/CardImage";
import { CardContent } from "./Sub-Components/CardContent";
import { CardActions } from "./Sub-Components/CardActions";
import { Button } from "../Button/Button";

export default {
  component: Card,
  title: "Components/Card",
  decorators: [
    (story: any) => {
      let padding =
        story().props.imagePosition === "left"
          ? { padding: "0 10rem" }
          : { padding: "0 35rem" };
      let bg =
        story().props.glassCard === true
          ? {
              background: "url(https://picsum.photos/id/314/1000/300)",
              padding: "20px",
            }
          : {};
      return <div style={{ ...padding, ...bg }}>{story()}</div>;
    },
  ],
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardImage src="https://picsum.photos/id/1002/400/250" alt="test image" />
    <CardContent title="Top Image" badgeText="New">
      Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
      necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.
    </CardContent>
    <CardActions>
      <Button buttonType="primary">Login</Button>
      <Button buttonType="ghost">Register</Button>
    </CardActions>
  </Card>
);

export const Default = Template.bind({});

Default.args = { imagePosition: "top" };

export const ImageBottom = Template.bind({});

ImageBottom.args = { imagePosition: "bottom" };

export const ImageOverlay = Template.bind({});

ImageOverlay.args = { overlayImage: true, imagePosition: "top" };

export const ShadowCenterPadding = Template.bind({});

ShadowCenterPadding.args = {
  centerAlign: true,
  shadow: "doubleExtraLarge",
  imagePosition: "top",
};

export const HorizontalCard = Template.bind({});

HorizontalCard.args = {
  shadow: "inner",
  imagePosition: "left",
};

export const GlassCard = Template.bind({});

GlassCard.args = {
  shadow: "medium",
  imagePosition: "left",
  glassCard: true,
};

export const SimpleCard = Template.bind({});

SimpleCard.args = {
  imagePosition: "none",
  overlayImage: true,
  cardBg: "secondary",
};
