import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Antwerp" />
        <footer>
          <a
            href="https://github.com/andi-szabo/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open source code
          </a>{" "}
          by Andrea Szabo
        </footer>
      </div>
    </div>
  );
}
