import { Meta, Story } from "@storybook/react";

import { Alert, AlertProps } from "./Alert";

export default {
  component: Alert,
  title: "Components/Alert",
} as Meta;

const Template: Story<AlertProps> = (args) => (
  <Alert {...args}>
    Et quis velit non id aliqua culpa ipsum quis deserunt.
  </Alert>
);

export const Default = Template.bind({});

Default.args = {};
