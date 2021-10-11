import { Meta, Story } from "@storybook/react";

import {
  Collapse,
  CollapseContent,
  CollapseProps,
  CollapseTitle,
} from "./Collapse";

export default {
  component: Collapse,
  title: "Components/Collapse",
} as Meta;

const Template: Story<CollapseProps> = (args) => (
  <>
    <Collapse {...args}>
      <CollapseTitle>I am open with focus</CollapseTitle>
      <CollapseContent>
        <p>
          Collapse content reveals with focus. If you add a checkbox, you can
          control it using checkbox instead of focus. Or you can
          force-open/force-close using
          <span className="badge badge-outline">collapse-open</span> and
          <span className="badge badge-outline">collapse-close</span> classes.
        </p>
      </CollapseContent>
    </Collapse>
  </>
);

export const Neutral = Template.bind({});

Neutral.args = {};
