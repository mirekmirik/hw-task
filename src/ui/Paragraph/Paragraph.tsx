// Styles
import "./Paragraph.scss";

type ParagraphSize = "xs" | "s" | "m" | "lg" | "xl";

interface ParagraphProps {
  text?: string | number;
  children?: React.ReactNode;
  size?: ParagraphSize;
  className?: string;
  style?: React.CSSProperties;
}

const Paragraph: React.FC<ParagraphProps> = ({
  size = "s",
  children = "",
  text = "",
  className = "",
  style = {},
}) => {
  const classList = `paragraph paragraph--${size} ${className}`;

  return (
    <p className={classList} style={style}>
      {text || children}
    </p>
  );
};

export default Paragraph;
