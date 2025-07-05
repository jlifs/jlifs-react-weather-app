import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Degrees from "./Degrees";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <h2>
            <FormattedDate date={props.data.date} />
          </h2>
          <ul className="text-capitalize">
            <li>{props.data.description}</li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>{" "}
            </li>
            <li>
              {" "}
              Wind: <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8 temperature-container">
          <div className="d-flex justify-content-end align-self-center">
            <WeatherIcon code={props.data.icon} size={70} />
            <Degrees celsius={props.data.temperature} city={props.data.city} />
          </div>
        </div>
      </div>
    </div>
  );
}