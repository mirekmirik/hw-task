// Styles
import "./Card.scss";

type CardColor = "blue" | "red" | "green" | "violet" | "black" | "orange";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  bgColor?: CardColor;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  bgColor = "orange",
  className,
  style = {},
  onClick,
}) => {
  const classList = `card ${`card--${bgColor}`} ${
    onClick ? "card--clickable" : ""
  } ${className}`;

  return (
    <div className={classList} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
