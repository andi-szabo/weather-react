import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temparature: response.data.main.temp,
      city: response.data.name,
      date: "20:14, Sun Jan 29",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
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
            <img src={weatherData.iconUrl} alt={weatherData.description} />
          </div>
          <div className="col info-wrap">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="col">
            <h2>{Math.round(weatherData.temperature)}</h2>
          </div>
          <div className="col">
            <h3>°C</h3>
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9f11c2cdb282264860737efc37c0d9d5";
    let units = "metric";
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}";
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
