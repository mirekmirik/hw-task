// Styles
import "./Textarea.scss";

interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  name: string;
  className?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  onChange,
  value,
  className,
  label,
  placeholder,
  required,
}) => {
  const classList = `textarea ${className}`;

  return (
    <div className="textarea__container">
      <label htmlFor={name} className="textarea__label">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={classList}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Textarea;
