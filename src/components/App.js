import React, { useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 10,
    condition: "Sunny",
  });
  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
