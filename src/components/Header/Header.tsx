import { NavLink } from "react-router-dom";

// Config
import { ROUTES } from "../../config";

// Styles
import "./Header.scss";

const HEADER_ITEMS = {
  "Home": ROUTES.HOME,
  "Create event": ROUTES.CREATE_EVENT,
};

const Header = () => {
  const renderHeaderItems = () => {
    return Object.entries(HEADER_ITEMS).map(([key, value]) => (
      <NavLink
        key={key}
        style={({ isActive, isTransitioning }) => {
          return {
            color: isActive ? "red" : "white",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        to={value}
      >
        {key}
      </NavLink>
    ));
  };

  return <div className="header">{renderHeaderItems()}</div>;
};

export default Header;
