// Styles
import "./List.scss";

interface ListProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  position?: "x" | "y";
}

interface ListItemProps extends Omit<ListProps, "position"> {}

const List: React.FC<ListProps> & { Item: React.FC<ListItemProps> } = ({
  children,
  className,
  onClick,
  style = {},
  position = "y",
}) => {
  return (
    <ul
      className={`list list--${position} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </ul>
  );
};

const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  style,
  onClick,
}) => {
  return (
    <li
      className={`list__item ${className}`}
      style={style}
      onClick={() => onClick?.()}
    >
      {children}
    </li>
  );
};

List.Item = ListItem;

export default List;
