import { FaApple } from "react-icons/fa";

import { Meta, Story } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Test</Button>;

export const Default = Template.bind({});

Default.args = {};

export const StartIcon = Template.bind({});

StartIcon.args = {
  startIcon: <FaApple />,
};

export const EndIcon = Template.bind({});

EndIcon.args = {
  endIcon: <FaApple />,
};

export const StartIconAndEndIcon = Template.bind({});

StartIconAndEndIcon.args = { ...StartIcon.args, ...EndIcon.args };
