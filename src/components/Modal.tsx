import { PropsWithChildren } from "react";
import { Dialog } from "@headlessui/react";

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, isOpen, handleClose }: PropsWithChildren<ModalProps>) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto rounded bg-white">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default Modal;