import { useNavigate } from "react-router-dom";

// Types
import { EventItem as EventItemType, Ticket } from "../../types";

//Components
import EventDate from "../EventDate";

// UI
import { Card, Heading, Paragraph, Button } from "../../ui";

// Styles
import "./EventItem.scss";

interface EventItemProps {
  item: EventItemType;
  onDelete?: (id: string) => void;
}

const countTickets = (tickets: Ticket[]) => {
  return tickets.reduce((acc, ticket) => acc + ticket.quantity, 0);
};

const EventItem: React.FC<EventItemProps> = ({ item, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    onDelete?.(id);
  };

  return (
    <Card className="event-item">
      <Heading
        className="event-item__title"
        level={5}
        title={item.name}
        fontWeight="bold"
      />
      <Paragraph className="event-item__tickets-count">
        Tickets available: {countTickets(item.tickets)}
      </Paragraph>
      <EventDate
        date={{ date: item.date, time: item.time }}
        className="event-item__date"
      />
      <Button
        className="event-item__button"
        text="View details"
        onClick={() => navigate(`/event/${item.id}`)}
      />
      <Button
        className="event-item__button"
        text="Update event"
        onClick={() => navigate(`/event/update/${item.id}`)}
      />
      {onDelete && (
        <Button
          text="Delete event"
          variant="danger"
          onClick={() => handleDelete(item.id)}
        />
      )}
    </Card>
  );
};

export default EventItem;
