import { Meta, Story } from "@storybook/react";

import { Textarea, TextareaProps } from "./Textarea";

export default {
  component: Textarea,
  title: "Components/Textarea",
} as Meta;

const Template: Story<TextareaProps> = (args) => (
  <Textarea {...args}>computer Science</Textarea>
);

export const Default = Template.bind({});

Default.args = {};
