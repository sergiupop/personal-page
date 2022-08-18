type CardProps = {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
};

export default Card;