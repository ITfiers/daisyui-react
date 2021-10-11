import React, { useRef } from "react";
import { ClientOnlyPortal } from "src/utils/client-only-portal";
import { useClickOutside } from "src/hooks/useClickOutside";

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ children, open, onClose }: ModalProps) => {
  const ref = useRef(null);

  useClickOutside(
    ref,
    () => {
      onClose();
    },
    (_, e: any) => {
      if (e.target.id === "outside-modal") return false;
      return true;
    }
  );

  return open ? (
    <ClientOnlyPortal selector="#modal">
      <div
        className="fixed z-[1000] inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            id="outside-modal"
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            ref={ref}
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-4xl sm:w-full"
          >
            {children}
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  ) : null;
};
