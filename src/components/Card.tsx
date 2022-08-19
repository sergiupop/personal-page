type CardProps = {
  title: string;
  description?: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="cursor-default py-2 px-3.5 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-150 ease-in">
      {title}
    </div>
  )
};

export default Card;