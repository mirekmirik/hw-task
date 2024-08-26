// Styles
import "./Input.scss";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  type?: string;
  name: string;
  id?: string;
  className?: string;
  required?: boolean;
  min?: string;
  max?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  value,
  className = "",
  id,
  required,
  type = "text",
  max,
  min,
  label,
}) => {
  const classList = `input ${className}`;
  return (
    <div className="input__container">
      {label && (
        <label htmlFor={name} className="input__label">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={classList}
        required={required}
        id={id}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Input;
