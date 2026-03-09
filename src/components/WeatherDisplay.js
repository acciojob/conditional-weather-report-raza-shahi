import React from 'react'

const WeatherDisplay = ({ weather }) => {
  return (
    <div>
      <h2>Weather Display</h2>
      <p>Temperature: <span style={weather.temperature>20 ? {color: "red"} : {color: "blue"}}>{weather.temperature}</span>°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  )
}

export default WeatherDisplay