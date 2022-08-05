type EmojiListItemProps = {
  emoji: {
    symbol: string;
    label: string;
  };
  text: string;
}

const EmojiListItem = ({ emoji, text }: EmojiListItemProps) => (
  <li>
    TEST
  </li>
);

export default EmojiListItem;