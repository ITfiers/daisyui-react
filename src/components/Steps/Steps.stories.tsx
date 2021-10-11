import { Meta, Story } from "@storybook/react";

import { Steps, StepProps, Step } from "./Steps";

export default {
  component: Step,
  title: "Components/Steps",
} as Meta;

const Template: Story<StepProps> = (args) => (
  <Steps>
    <Step {...args}>start</Step>
    <Step>start</Step>
    <Step {...args}>start</Step>
    <Step {...args}>start</Step>
    <Step {...args} dataContent="?">
      start
    </Step>
  </Steps>
);

export const Neutral = Template.bind({});

Neutral.args = {};
