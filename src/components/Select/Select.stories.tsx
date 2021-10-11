import { Meta, Story } from "@storybook/react";

import { Select, SelectProps } from "./Select";

export default {
  component: Select,
  title: "Components/Select",
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <Select {...args}>
    <option>telekinesis</option>
    <option>time travel</option>
  </Select>
);
export const Default = Template.bind({});

Default.args = {};
