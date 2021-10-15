import { Meta, Story } from "@storybook/react";
import { Button } from "../Button/Button";

import { Modal, ModalProps } from "./Modal";

export default {
  component: Modal,
  title: "Components/Modal",
} as Meta;
const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <div className="m-8">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptate
      omnis laborum aliquam quis, dicta quos reprehenderit esse, laudantium aut,
      adipisci totam tempora a magnam aliquid mollitia ratione nam unde?
    </div>
    <Button size="small" className="float-right mt-5 mr-3 mb-3">
      Close
    </Button>
  </Modal>
);

export const Default = Template.bind({});

Default.args = { open: true };
