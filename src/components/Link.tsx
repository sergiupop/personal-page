import "./Link.css";

type LinkProps = {
  text: string;
}

const Link = ({ text }: LinkProps) => {
  return (
    <a href={`#${text}`} className="link">
        Go to {text}
    </a>
  )
}

export default Link;