import { Meta, Story } from "@storybook/react";

import { Pagination, PaginationButton, PaginationProps } from "./Pagination";

export default {
  component: PaginationButton,
  title: "Components/Pagination",
} as Meta;

const Template: Story<PaginationProps> = (args) => (
  <Pagination>
    <PaginationButton {...args}>Previous</PaginationButton>
    <PaginationButton {...args}>1</PaginationButton>
    <PaginationButton {...args}>2</PaginationButton>
    <PaginationButton {...args}>2</PaginationButton>
    <PaginationButton {...args}>2</PaginationButton>
    <PaginationButton {...args}>...</PaginationButton>
    <PaginationButton {...args}>NEXT</PaginationButton>
  </Pagination>
);

export const Neutral = Template.bind({});

Neutral.args = {};
