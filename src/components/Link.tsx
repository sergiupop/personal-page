import { PropsWithChildren } from "react";

type LinkProps = {
  href: string;
}

const Link = ({ href, children }: PropsWithChildren<LinkProps>) => (
  <a href={`#${href}`} className="font-medium text-green-600 no-underline relative pb-1 inline-block
                                  transition-color ease-in duration-200
                                  before:w-0 before:absolute before:bottom-0 before:h-[3px] before:bg-red-600 before:transition-width before:ease-in before:duration-200
                                  hover:text-red-600 hover:before:w-full focus:before:w-full">
      {children}
  </a>
);

export default Link;