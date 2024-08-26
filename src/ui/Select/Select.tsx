// Styles
import React from "react";
import "./Select.scss";

interface SelectOptionProps {
  value: string;
  children?: React.ReactNode;
  className?: string;
  isSelected?: boolean;
}

interface SelectProps {
  children:
    | React.ReactElement<SelectOptionProps>[]
    | React.ReactElement<SelectOptionProps>;
  onChange?: (value: string) => void;
  className?: string;
  value?: string;
}

const Select: React.FC<SelectProps> & {
  Option: React.FC<SelectOptionProps>;
} = ({ children, onChange, className = "", value }) => {
  const classList = `select ${className}`;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (
      React.isValidElement<SelectOptionProps>(child) &&
      child.type === Select.Option
    ) {
      return React.cloneElement(child, {
        isSelected: child.props.value === value,
      });
    }
    throw new Error("Select only accepts Select.Option as children");
  });

  return (
    <select
      className={classList}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
    >
      {childrenWithProps}
    </select>
  );
};

const SelectOption: React.FC<SelectOptionProps> = ({
  value,
  children,
  className = "",
  isSelected,
}) => {
  const classList = `select-option ${className} ${
    isSelected ? "select-option--selected" : ""
  }`;

  return (
    <option className={classList} value={value}>
      {children}
    </option>
  );
};

Select.Option = SelectOption;

export default Select;
