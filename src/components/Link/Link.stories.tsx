import { Meta, Story } from "@storybook/react";

import { Link, LinkProps } from "./Link";

export default {
  component: Link,
  title: "Components/Link",
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <Link {...args}>This is a link</Link>
);

export const Neutral = Template.bind({});
Neutral.args = {
  href: "/",
};
export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  href: "/primary",
};
