import { PropsWithChildren, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, isOpen, handleClose }: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    }
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 text-white flex flex-col items-center justify-center overflow-hidden transition-all ease-in-out duration-300 z-[999] pt-10 px-5 pb-5">
      <button onClick={handleClose}>Close</button>
      <div className="w-3/4 h-3/4 bg-zinc-700 flex items-center justify-center">{children}</div>
    </div>
  )
}

export default Modal;