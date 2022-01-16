import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "3c2e3518e7c20a6a42a69d7651e8545a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="#00000"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
