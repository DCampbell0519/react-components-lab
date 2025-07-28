import React from 'react'

const WeatherData = ({ weather }) => {
  return (
    <div className="weather">
        <h2>{weather.day}</h2>
        <p><span>conditions: </span>{weather.conditions}</p>
        <p><span>time: </span>{weather.time}</p>
    </div>
  )
}

export default WeatherData