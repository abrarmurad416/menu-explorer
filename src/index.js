// imports
import React from "react";
import ReactDOM from "react-dom";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

// getting the root element
const rootElement = document.getElementById("root");
// rendering the react app
ReactDOM.render(<App />, rootElement);
