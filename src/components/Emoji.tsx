type EmojiProps = {
  symbol: string;
  label: string;
  className?: string;
}

const Emoji = ({ className, symbol, label }: EmojiProps) => (
  <span role="img" aria-label={label ?? ""} aria-hidden={label ? "false" : "true"} className={className}>
    {symbol}
  </span>
);

export default Emoji; 