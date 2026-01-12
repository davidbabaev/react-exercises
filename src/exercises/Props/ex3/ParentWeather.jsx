import React from 'react'
import WeatherCard from './WeatherCard'

export default function ParentWeather() {
  return (
    <div>
        <WeatherCard
            city = 'NYC'
            temperature = '30C'
            condition = 'Sunny'
            humidity = {5}
        />
        <WeatherCard
            city = 'Brooklyn'
            temperature = '25C'
            condition = 'Rainy'
            humidity = {3}
        />
    </div>
  )
}
