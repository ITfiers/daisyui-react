import { Meta, Story } from "@storybook/react";
import { Mask, MaskProps } from "./Mask";

export default {
  component: Mask,
  title: "Components/Mask",
} as Meta;
const Template: Story<MaskProps> = (args) => (
  <Mask {...args} src="https://picsum.photos/id/1005/200/200" alt="MaskImage" />
);

export const Default = Template.bind({});

Default.args = {};
