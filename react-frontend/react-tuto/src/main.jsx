import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";

import Store from "./Redux/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
);
