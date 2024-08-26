// Types
import { Ticket } from "../../types";

// UI
import { Heading, List, Paragraph } from "../../ui";

// Styles
import "./TicketItem.scss";

interface TicketItemProps {
  item: Ticket;
}

const TicketItem: React.FC<TicketItemProps> = ({ item }) => {
  return (
    <List.Item className="ticket-item">
      <Heading
        className="ticket-item__title"
        title={item.type}
        level={4}
        fontWeight="bold"
      />
      <Paragraph
        className="ticket-item__price"
        text={`$${item.price.toFixed(2)}`}
      />
      <Paragraph className="ticket-item__available" size="xs">
        Available: {item.quantity}
      </Paragraph>
    </List.Item>
  );
};

export default TicketItem;
