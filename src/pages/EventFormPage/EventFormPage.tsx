import { useParams } from "react-router-dom";

// Components
import { EventFormManager } from "../../components";

// Styles
import "./EventFormPage.scss";

const EventFormPage = () => {
  const { id } = useParams();

  return (
    <div className="event-form-page">
      <EventFormManager id={id} />
    </div>
  );
};

export default EventFormPage;
