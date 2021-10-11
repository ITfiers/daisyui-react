import { Meta, Story } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Components/Checkbox",
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <Checkbox {...args} labelText="checkbox" />
);

export const Default = Template.bind({});

Default.args = {};
