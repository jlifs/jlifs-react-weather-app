import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maximum = Math.round(props.data.temperature.maximum);
    return maximum;
  }

  function minTemperature() {
    let minimum = Math.round(props.data.temperature.minimum);
    return minimum;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="Daily">
      <h4 className="Day">{day()}</h4>
      <WeatherIcon code={props.data.condition.icon} size={45} />
      <div className="temperatures">
        <span className="temperature-max"> {maxTemperature()}º </span> |{" "}
        <span className="temperature-min">{minTemperature()}º</span>
      </div>
    </div>
  );
}