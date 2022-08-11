import Emoji from "./Emoji";

type BioListItemProps = {
  emoji: {
    symbol: string;
    label: string;
  };
  text: string;
}

const BioListItem = ({ emoji, text }: BioListItemProps) => (
  <li className="group list-none flex w-fit cursor-pointer hover:-translate-y-1 transition-all duration-150 ease-in">
    <Emoji className="mr-4 text-[1.5rem]" {...emoji} />
    <span className="inline-flex items-center group-hover:text-red-600">{text}</span>
  </li>
);

export default BioListItem;