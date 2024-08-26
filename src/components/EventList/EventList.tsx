// Types
import { EventItem as EventItemType } from "../../types";

// Components
import EventItem from "../EventItem";

// Styles
import "./EventList.scss";

interface EventListProps {
  list: EventItemType[];
  onDelete: (id: string) => void;
}

const EventList: React.FC<EventListProps> = ({ list, onDelete }) => {
  return (
    <div className="event-list">
      {list.map((item) => (
        <EventItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EventList;
