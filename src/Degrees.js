import React from "react";
import "./Weather.css";

export default function Degrees(props) {
  return (
    <div className="changeDegrees">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C </span>
    </div>
  );
}
