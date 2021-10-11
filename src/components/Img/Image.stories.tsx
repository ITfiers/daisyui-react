import { Meta, Story } from "@storybook/react";

import { Img, ImgProps } from "./Img";

export default {
  component: Img,
  title: "Components/FallBackImag",
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});

Default.args = {};
