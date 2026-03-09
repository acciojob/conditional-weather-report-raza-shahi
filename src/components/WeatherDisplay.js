import React from 'react'

const WeatherDisplay = ({ weather }) => {
  return (
    <div>
      <h2>Weather Display</h2>
      <p><span style={weather.temperature>20 ? {color: "red"} : {color: "blue"}}>Temperature: {weather.temperature}</span></p>
      <p>Condition: {weather.condition}</p>
    </div>
  )
}

export default WeatherDisplay