import { Fragment, PropsWithChildren } from "react";
import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, isOpen, handleClose }: PropsWithChildren<ModalProps>) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog onClose={handleClose}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-3/4 h-3/4 rounded bg-white">
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal;