import { Meta, Story } from "@storybook/react";

import { Divider, DividerProps } from "./Divider";

export default {
  component: Divider,
  title: "Components/Divider",
} as Meta;

const Template: Story<DividerProps> = (args) => (
  <Divider {...args}>Test</Divider>
);

export const Default = Template.bind({});

Default.args = {};
