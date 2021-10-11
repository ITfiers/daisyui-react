import { Meta, Story } from "@storybook/react";

import { TabList, TabListProps } from "./TabList";

export default {
  component: TabList,
  title: "Components/TabList",
} as Meta;

const Template: Story<TabListProps> = (args) => (
  <TabList
    {...args}
    tabs={[
      { content: "Tab 1" },
      { content: "Tab 2", isActive: true },
      { content: "Tab 3" },
    ]}
  />
);

export const Neutral = Template.bind({});

Neutral.args = {};

export const Bordered = Template.bind({});

Bordered.args = {
  variant: "bordered",
};

export const Lifted = Template.bind({});

Lifted.args = {
  variant: "lifted",
};

export const Boxed = Template.bind({});

Boxed.args = {
  variant: "boxed",
};
