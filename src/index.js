import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { HomeContextProvider } from "./components/Context/HomeContext";

ReactDOM.render(
  <React.StrictMode>
    <HomeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HomeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
