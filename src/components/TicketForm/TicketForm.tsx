import { Fragment, useEffect, useState } from "react";

// Types
import { Ticket } from "../../types";

// UI
import { Input, Button, Card } from "../../ui";

// Styles
import "./TicketForm.scss";

interface TicketFormProps {
  formData: Ticket[];
  isEditMode: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i?: number
  ) => void;
  onDeleteTicket: (id: number) => void;
}

const TicketForm: React.FC<TicketFormProps> = ({
  formData,
  isEditMode,
  onInputChange,
  onDeleteTicket,
}) => {
  const defaultInputs = (
    onChange: TicketFormProps["onInputChange"],
    ticket?: Ticket,
    index?: number
  ) => {
    return (
      <Card className="ticket-form__container">
        <div className="ticket-form__input">
          <Input
            type="text"
            name={"type"}
            onChange={(e) => onChange(e, index)}
            id={"type"}
            placeholder="Ticket type"
            label="Ticket type:"
            value={ticket?.type || ""}
          />
        </div>
        <div className="ticket-form__input">
          <Input
            type="number"
            name="quantity"
            onChange={(e) => onChange(e, index)}
            value={String(ticket?.quantity || "")}
            id="quantity"
            placeholder="Ticket quantity"
            label="Ticket quantity:"
            min="0"
          />
        </div>
        <div className="ticket-form__input">
          <Input
            type="number"
            name="price"
            onChange={(e) => onChange(e, index)}
            value={String(ticket?.price || "")}
            id="price"
            placeholder="Ticket price"
            label="Ticket price:"
            min="0"
          />
        </div>
      </Card>
    );
  };

  const [inputs, setInputs] = useState([defaultInputs(onInputChange)]);

  useEffect(() => {
    const updatedInputs = formData.map((ticket, index) =>
      defaultInputs(onInputChange, ticket, index)
    );
    setInputs(updatedInputs);
  }, [isEditMode, formData, onInputChange]);

  const addNewForm = () => {
    setInputs((prev) => [...prev, defaultInputs(onInputChange)]);
  };

  return (
    <div className="ticket-form">
      {inputs.map((input, idx) => (
        <Fragment key={idx}>
          {input}
          <Button
            text="Delete"
            variant="danger"
            onClick={() => onDeleteTicket(idx)}
          />
        </Fragment>
      ))}
      <Button
        className="ticket-form__button"
        onClick={addNewForm}
        text="Add new ticket"
      />
    </div>
  );
};

export default TicketForm;
