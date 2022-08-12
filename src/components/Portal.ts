import { PropsWithChildren, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import createDivElementInBody from "../helpers/createDivElementInBody";

type ReactPortalProps = {
  wrapperElementId?: string;
}

const Portal = ({ children, wrapperElementId = "portal-wrapper" }: PropsWithChildren<ReactPortalProps>) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const element = document.getElementById(wrapperElementId) ?? 
      createDivElementInBody(wrapperElementId);

    setWrapperElement(element);

    return () => {
      console.log("Unmount portal: ", element);
      if (element.parentNode) element.parentNode.removeChild(element);
    }
  }, [wrapperElementId]);


  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default Portal;