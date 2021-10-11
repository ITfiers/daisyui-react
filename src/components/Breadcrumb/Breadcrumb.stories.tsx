import { v4 as uuidv4 } from "uuid";
import { Meta, Story } from "@storybook/react";
import { BreadcrumbProps, Breadcrumb } from "./Breadcrumb";

export default {
  component: Breadcrumb,
  title: "Components/Breadcrumb",
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { id: uuidv4(), name: "Home", path: "/" },
    { id: uuidv4(), name: "About", path: "/about" },
  ],
};
