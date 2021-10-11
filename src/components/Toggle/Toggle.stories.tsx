import { Meta, Story } from "@storybook/react";

import { Toggle, ToggleProps } from "./Toggle";

export default {
  component: Toggle,
  title: "Components/Toggle",
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});

Default.args = {};
