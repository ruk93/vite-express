import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import LandingPage from "./features/landingPage/LandingPage";
import "./index.css";
import { store } from "./library/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <LandingPage />
    </Provider>
  </React.StrictMode>
);
