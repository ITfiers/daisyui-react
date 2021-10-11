import { Meta, Story } from "@storybook/react";
import { Indicator, IndicatorProps } from "./Indicator";
export default {
  component: Indicator,
  title: "Components/Indicator",
} as Meta;

const Template: Story<IndicatorProps> = (args) => {
  return (
    <Indicator {...args}>
      <p>new</p>
    </Indicator>
  );
};

export const Default = Template.bind({});

Default.args = {};
