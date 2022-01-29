import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy"
          />
        </div>
        <div className="col info-wrap">
          <h1>Antwerp</h1>
          <ul>
            <li>20:14, Sun Jan 29</li>
            <li>Broken clouds</li>
          </ul>
        </div>
        <div className="col">
          <h2>10</h2>
        </div>
        <div className="col">
          <h3>°C</h3>
          <ul>
            <li>Humidity: 87%</li>
            <li>Wind: 4km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
