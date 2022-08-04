type LinkProps = {
  text: string;
  href: string;
}

const Link = ({ text, href }: LinkProps) => {
  const label = `Go to ${text}`;
  
  return (
    <a href={`#${href}`} className="font-medium text-green-600 no-underline relative pb-0.5
                                    before:w-0 before:absolute before:bottom-0 before:h-0.5 before:bg-red-600 before:transition-width before:ease-in before:duration-200
                                    hover:before:w-full focus:before:w-full">
        {label}
    </a>
  )
}

export default Link;