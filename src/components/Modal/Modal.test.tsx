import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import userEvent from "@testing-library/user-event";

/**
 * FIX: Tests
 */
describe.skip("components/Modal", () => {
  it("should render the children when they are passed", () => {
    render(
      <Modal open onClose={() => {}}>
        <p>Enim dolorem</p>
      </Modal>
    );

    const element = screen.getByText(/Enim dolorem/i);

    expect(element).toBeInTheDocument();
  });

  it("should render when open prop is passed", () => {
    render(
      <Modal open onClose={() => {}}>
        <Button>Cancel</Button>
      </Modal>
    );
    const element = screen.getByText(/cancel/i);
    userEvent.click(element);
  });
});
