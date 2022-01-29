import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search </h1>
      <WeatherSearch />
      <p>
        <a href="https://github.com/andi-szabo/weather-react">
          open source code{" "}
        </a>
        by Andrea Szabo
      </p>
    </div>
  );
}
