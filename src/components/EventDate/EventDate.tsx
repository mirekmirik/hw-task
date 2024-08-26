// UI
import { Paragraph } from "../../ui";

// Styles
import "./EventDate.scss";

interface EventDateProps {
  date: {
    date: string;
    time: string;
  };
  className?: string;
}

const EventDate: React.FC<EventDateProps> = ({ date, className }) => {
  const { time, date: day } = date;

  const renderDate = () => {
    let text = "Planned ";
    text += day || "";
    text += time ? ` at ${time}` : "";
    return text;
  };

  return (
    <Paragraph className={`event-date ${className}`} size="s">
      {renderDate()}
    </Paragraph>
  );
};

export default EventDate;
