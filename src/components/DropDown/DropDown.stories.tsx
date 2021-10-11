import { Meta, Story } from "@storybook/react";
import { DropDown, DropDownItem, DropDownProps } from "./DropDown";
import { Button } from "../Button/Button";

export default {
  component: DropDown,
  title: "Components/DropDown",
} as Meta;

const Template: Story<DropDownProps> = (args) => (
  <DropDown {...args} tabIndex={0} btn={<Button tabIndex={0}>DropDown</Button>}>
    <DropDownItem>1</DropDownItem>
    <DropDownItem>2</DropDownItem>
    <DropDownItem>3</DropDownItem>
  </DropDown>
);

export const Neutral = Template.bind({});

Neutral.args = {};
