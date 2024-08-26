import { useEffect } from "react";

// Hooks
import { useEvents } from "../../hooks";

// UI
import { Loader, Paragraph, Heading } from "../../ui";

// Components
import { Error, EventDate, TicketList } from "../../components";

// Styles
import "./Event.scss";

interface EventProps {
  id?: string;
}

const Event: React.FC<EventProps> = ({ id }) => {
  const { fetchEvent, currentEvent, events, isLoading, error } = useEvents();

  useEffect(() => {
    if (!id) return;
    fetchEvent(id);
  }, [id, fetchEvent, events]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <Error text={error} />;

  if (!currentEvent) {
    return null;
  }

  return (
    <div className="event">
      <Heading level={1} title={currentEvent.name} fontWeight="bold" />
      <hr />
      <Paragraph className="event__description" size="m">
        {currentEvent.description}
      </Paragraph>
      {currentEvent.tickets.length > 0 && (
        <div className="event__tickets">
          <TicketList tickets={currentEvent.tickets} />
        </div>
      )}
      <EventDate
        date={{
          date: currentEvent.date,
          time: currentEvent.time,
        }}
        className="event__date"
      />
    </div>
  );
};

export default Event;
