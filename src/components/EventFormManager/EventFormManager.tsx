import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Types
import { EventItem } from "../../types";

// Components
import { Error, EventForm, TicketForm } from "../../components";

// Utils
import { checkIsNaN, generateRandomId } from "../../utils";

// UI
import { Loader, Button, Heading } from "../../ui";

// Hooks
import { useEvents } from "../../hooks";

// Styles
import "./EventFormManager.scss";

interface EventFormManagerProps {
  id?: string;
}

const EventFormManager: React.FC<EventFormManagerProps> = ({ id }) => {
  const navigate = useNavigate();
  const {
    currentEvent,
    fetchEvent,
    postEvent,
    putEvent,
    isLoading,
    error,
    resetEventsState,
  } = useEvents();

  const [formData, setFormData] = useState<EventItem>({
    id: "",
    name: "",
    date: "",
    time: "",
    description: "",
    tickets: [],
  });

  const isEditMode = !!id;

  // for showing the form even when got error from other page
  useEffect(() => {
    resetEventsState();
  }, [resetEventsState]);

  useEffect(() => {
    if (isEditMode) {
      fetchEvent(id);
    }
  }, [id, fetchEvent, isEditMode]);

  useEffect(() => {
    if (isEditMode && currentEvent) {
      setFormData(currentEvent);
    }
  }, [currentEvent, isEditMode]);

  const handleEventChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTicketChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number | null = null
  ) => {
    const { name, value } = e.target;
    // because value can be string or number
    const transformedValue = checkIsNaN(value) ? value : Number(value);

    // if no ticket then create new one
    const updateTickets = () => {
      if (i === null) {
        return [...formData.tickets, { [name]: transformedValue } as any];
      }
      // update exist ticket
      return formData.tickets.map((ticket, index) =>
        index === i ? { ...ticket, [name]: transformedValue } : ticket
      );
    };
    setFormData((prev) => ({
      ...prev,
      tickets: updateTickets(),
    }));
  };

  const deleteTicket = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      tickets: prev.tickets.filter((_, idx) => idx !== id),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = generateRandomId();
    if (isEditMode) {
      await putEvent(formData);
    } else {
      await postEvent({ ...formData, id });
    }
    const urlNavigate = isEditMode ? `/event/${formData.id}` : `/event/${id}`;
    navigate(urlNavigate);
  };

  if (error) return <Error text={error} />;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleSubmit} className="event-form-page">
      <Heading>
        {isEditMode ? `Update ${currentEvent?.name} event` : `Create new event`}
      </Heading>
      <hr />
      <EventForm
        formData={formData}
        isEditMode={isEditMode}
        onInputChange={handleEventChange}
      />
      <hr />
      <TicketForm
        formData={formData.tickets}
        isEditMode={isEditMode}
        onInputChange={handleTicketChange}
        onDeleteTicket={deleteTicket}
      />
      <Button
        type="submit"
        onSubmit={handleSubmit}
        disabled={isLoading}
        text={isEditMode ? "Update Event" : "Create Event"}
      />
    </form>
  );
};

export default EventFormManager;
