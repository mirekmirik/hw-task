// Styles
import "./Heading.scss";

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type FontWeight = "normal" | "bold";

interface HeadingProps {
  title?: string;
  level?: Level;
  fontWeight?: FontWeight;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  title = "",
  level = 1,
  fontWeight = "normal",
  className = "",
  style = {},
  children = "",
}) => {
  const classListHeading = `heading heading--${fontWeight} heading--${level} ${className}`;
  const Tag = `h${level}` as `h${Level}`;

  return (
    <Tag className={classListHeading} style={style}>
      {title || children}
    </Tag>
  );
};

export default Heading;
