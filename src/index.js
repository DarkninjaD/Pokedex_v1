import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Pokedex from "./Pokedex";
import reportWebVitals from "./reportWebVitals";
import poke from "./pokeExample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pokedex pokemon={poke} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
