import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "} 
          <a href="https://github.com/jlifs"
          target="_blank"
          rel="noreferrer">
          {" "}
          Jennifer Lifsey{" "} 
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/jlifs/jlifs-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://subtle-boba-2cf4a3.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
