import { useParams } from "react-router-dom";

// Components
import { Event } from "../../components";

// Styles
import "./EventPage.scss";

const EventPage = () => {
  const { id } = useParams();

  return (
    <div className="event-page">
      <Event id={id} />
    </div>
  );
};

export default EventPage;
