import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <footer>
        Coded by Andrea Szabo and is{" "}
        <a href="https://github.com/andi-szabo/weather-react" target="_blank">
          open source on Github{" "}
        </a>
      </footer>
    </div>
  );
}
