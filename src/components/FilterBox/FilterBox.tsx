import React, { useMemo, useState } from "react";

// Utils
import { parseFilters, getTodayDate } from "../../utils";

// UI
import { Heading, Input, Button } from "../../ui";

// Styles
import "./FilterBox.scss";

interface FilterBoxProps {
  onSubmit: (value: { [key: string]: string }) => void;
  value: string | null;
}

const FilterBox: React.FC<FilterBoxProps> = ({ onSubmit, value }) => {
  const initialFilters = useMemo(() => {
    const parsedFilters = parseFilters(value);
    return { date: getTodayDate(), ...parsedFilters };
  }, [value]);

  const [filters, setFilters] = useState<{ [key: string]: string }>(
    initialFilters
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(filters);
  };

  return (
    <div className="filter-box">
      <Heading
        className="filter-box__title"
        fontWeight="bold"
        level={4}
        title="Filters"
      />
      <Input
        name="date"
        onChange={handleInputChange}
        placeholder="Date"
        value={filters.date}
        min={getTodayDate()}
        className="filter-box__input"
        type="date"
      />
      <Button
        className="filter-box__button"
        text="Apply"
        type="button"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default FilterBox;
