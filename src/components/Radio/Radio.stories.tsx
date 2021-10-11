import { Meta, Story } from "@storybook/react";

import { Radio, RadioProps } from "..";

export default {
  component: Radio,
  title: "Components/Radio",
} as Meta;

const Template: Story<RadioProps> = (args) => (
  <Radio {...args} labelText="Radio" />
);
export const Default = Template.bind({});

Default.args = {};
