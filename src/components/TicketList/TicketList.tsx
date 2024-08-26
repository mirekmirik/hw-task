// Components
import TicketItem from "../TicketItem";

// Types
import { Ticket } from "../../types";

// UI
import { List } from "../../ui";

// Styles
import "./TicketList.scss";

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  return (
    <List className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem item={ticket} />
      ))}
    </List>
  );
};

export default TicketList;
