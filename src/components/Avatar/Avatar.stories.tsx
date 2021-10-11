import { Meta, Story } from "@storybook/react";

import { Avatar, AvatarProps } from "./Avatar";

export default {
  component: Avatar,
  title: "Components/Avatar",
} as Meta;

const Template: Story<AvatarProps> = (args) => (
  <Avatar
    {...args}
    alt="avatar"
    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
  />
);

export const Default = Template.bind({});

Default.args = {};
