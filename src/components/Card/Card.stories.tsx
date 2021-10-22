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
    <CardImage src="https://picsum.photos/id/1005/400/250" alt="test image" />
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

Default.args = { imagePosition: "left" };
