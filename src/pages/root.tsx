import { Outlet } from "react-router-dom";

// Components
import { Header } from "../components";

// Styles
import "./root.scss";

const Root = () => {
  return (
    <div className="root">
      <div className="root__header">
        <Header />
      </div>
      <main className="root__main">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
