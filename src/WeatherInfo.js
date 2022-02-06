import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <WeatherIcon code={props.data.icon} size={64} />
        </div>
        <div className="col info-wrap">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col">
          <h2>
            <strong>{Math.round(props.data.temperature)}</strong>
          </h2>
        </div>
        <div className="col">
          <h3>°C</h3>
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
