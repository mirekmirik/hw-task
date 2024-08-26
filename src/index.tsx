import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

// Store
import store from "./store";

// Pages
import { EventFormPage, EventPage, EventsPage, Root } from "./pages";

// Config
import { ROUTES } from "./config";

// Styles
import "./index.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: ROUTES.HOME,
        element: <EventsPage />,
      },
      {
        path: ROUTES.EVENT,
        element: <EventPage />,
      },
      {
        path: ROUTES.UPDATE_EVENT,
        element: <EventFormPage />,
      },
      {
        path: ROUTES.CREATE_EVENT,
        element: <EventFormPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
