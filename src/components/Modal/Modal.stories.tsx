import { Meta, Story } from "@storybook/react";

import { Modal, ModalProps } from "./Modal";

export default {
  component: Modal,
  title: "Components/Modal",
} as Meta;
const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptate
      omnis laborum aliquam quis, dicta quos reprehenderit esse, laudantium aut,
      adipisci totam tempora a magnam aliquid mollitia ratione nam unde?
    </p>
  </Modal>
);

export const Default = Template.bind({});

Default.args = { open: true };
