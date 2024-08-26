import React, { useState } from "react";

// Types
import { EventItem } from "../../types";

// UI
import { Select } from "../../ui";

// Styles
import "./SortDropdown.scss";

type SortDirection = "asc" | "desc";

export type SortOptions<T> = Partial<
  Record<
    `${keyof T & string}_${SortDirection}`,
    { label: string; value: string }
  >
>;

interface SortDropdownProps {
  defaultOption: string;
  sortOptions: SortOptions<EventItem>;
  onChange: (value: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  defaultOption,
  sortOptions,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = (value: string) => {
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="sort-dropdown">
      <Select
        className="sort-dropdown__select"
        onChange={handleChange}
        value={selectedOption}
      >
        {Object.entries(sortOptions).map(([key, { label, value }]) => (
          <Select.Option
            className="sort-dropdown__option"
            value={value}
            key={key}
            isSelected={value === selectedOption}
          >
            {label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default SortDropdown;
