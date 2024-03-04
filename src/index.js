import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import App from "./App";
import i18n from "./i18n/i18n";

import reportWebVitals from "./reportWebVitals";

document.body.dir = i18n.dir();

const app = ReactDOM.createRoot(document.getElementById("app"));

app.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
