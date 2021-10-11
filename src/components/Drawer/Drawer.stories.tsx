import { Meta, Story } from "@storybook/react";

import {
  Drawer,
  DrawerProps,
  DrawerToggle,
  DrawerContent,
  DrawerSide,
} from "./Drawer";

export default {
  component: Drawer,
  title: "Components/Drawer",
} as Meta;

const Template: Story<DrawerProps> = (args) => (
  <>
    <Drawer {...args} className="h-screen drawer-mobile">
      <DrawerContent className="flex items-center justify-center">
        <DrawerToggle className="btn btn-success">Tests</DrawerToggle>
        You can put whatever content you want here
      </DrawerContent>
      <DrawerSide>
        <DrawerToggle className="btn btn-success">Close</DrawerToggle>
        <div className="">Teehee</div>
      </DrawerSide>
    </Drawer>
  </>
);

export const Neutral = Template.bind({});

Neutral.args = {};
