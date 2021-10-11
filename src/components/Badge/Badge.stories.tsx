import { Meta, Story } from "@storybook/react";

import { Badge, BadgeProps } from "./Badge";

export default {
  component: Badge,
  title: "Components/Badge",
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args}>Testing</Badge>;

export const Default = Template.bind({});

Default.args = {};
