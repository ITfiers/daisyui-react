import { Meta, Story } from "@storybook/react";

import { Tooltip, TooltipProps } from "./Tooltip";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <button>Hover me</button>
  </Tooltip>
);

export const Default = Template.bind({});

Default.args = {};
