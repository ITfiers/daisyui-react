import { Meta, Story } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  component: Loader,
  title: "Components/Loader",
} as Meta;

const Template: Story = () => <Loader />;

export const Default = Template.bind({});
