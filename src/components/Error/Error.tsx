// UI
import { Heading } from "../../ui";

// Styles
import "./Error.scss";

interface ErrorProps {
  text: string;
}

const Error: React.FC<ErrorProps> = ({ text }) => {
  return (
    <Heading className="error" level={1} fontWeight="bold">
      {text}
    </Heading>
  );
};

export default Error;
