// Styles
import "./Button.scss";

type ButtonTypes = "button" | "submit" | "reset";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  onSubmit?: (e: React.FormEvent) => Promise<void>;
  type?: ButtonTypes;
  disabled?: boolean;
  className?: string;
  variant?: "danger";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  children,
  className = "",
  onSubmit,
  variant,
}) => {
  const buttonClassList = `button button--${type} button--${variant} ${
    disabled ? "button--disabled" : ""
  } ${className}`;

  return (
    <button
      className={buttonClassList}
      disabled={disabled}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {text || children}
    </button>
  );
};

export default Button;
