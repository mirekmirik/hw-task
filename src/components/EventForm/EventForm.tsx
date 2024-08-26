import React from "react";

// Types
import { EventItem } from "../../types";

// UI
import { Card, Input, Textarea } from "../../ui";

// Utils
import { getTodayDate } from "../../utils";

// Styles
import "./EventForm.scss";

interface EventFormProps {
  formData: EventItem;
  isEditMode: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const EventForm: React.FC<EventFormProps> = ({ formData, onInputChange }) => {
  return (
    <Card className="event-form">
      <div className="event-form__input">
        <Input
          type="text"
          name={"name"}
          value={formData.name}
          onChange={onInputChange}
          id={"name"}
          placeholder="Event Name"
          label="Event name:"
          required
        />
      </div>
      <div className="event-form__input">
        <Input
          type="date"
          name={"date"}
          value={formData.date}
          onChange={onInputChange}
          id="date"
          label="Date:"
          min={getTodayDate()}
        />
      </div>
      <div className="event-form__input">
        <Input
          type="time"
          name={"time"}
          value={formData.time}
          onChange={onInputChange}
          id="time"
          label="Time:"
        />
      </div>
      <div className="event-form__textarea">
        <Textarea
          id="description"
          name="description"
          onChange={onInputChange}
          value={formData.description}
          className="event-form__textarea"
          label="Description:"
          placeholder="Description"
          required
        />
      </div>
    </Card>
  );
};

export default EventForm;
