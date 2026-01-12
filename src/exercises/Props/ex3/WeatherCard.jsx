import React from 'react'

export default function WeatherCard({city, temperature, condition, humidity}) {
  return (
    <div
        style={{border: '1px solid black', margin: '10px', padding: '10px', width: '200px', borderRadius: '10px'}}
    >
        <p style={{fontSize: '20px'}} >{city}</p>
        <p>temperature: {temperature}</p>
        <p>condition: {condition}</p>
        <p>humidity: {humidity}</p>
    </div>
  )
}
