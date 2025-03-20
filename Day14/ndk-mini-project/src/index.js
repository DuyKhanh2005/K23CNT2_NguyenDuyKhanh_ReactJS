import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NdkApp from "./NdkApp";

const ndkRoot = ReactDOM.createRoot(document.getElementById("ndkRoot"));
ndkRoot.render(
  <React.StrictMode>
    <BrowserRouter> {/* Đặt Router ở đây để tránh bị lặp */}
      <NdkApp />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
