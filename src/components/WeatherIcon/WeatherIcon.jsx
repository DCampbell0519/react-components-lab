import React from 'react'

const WeatherIcon = ({ img }) => {
  return (
    <div className="weather">
        <img src={img} alt="" />
    </div>
  )
}

export default WeatherIcon