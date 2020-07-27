import React from 'react'
import Weather from './Weather';

export default{
    title: "Weather",
    component: Weather
}

export const WeatherExample = () => <Weather temperature={10} state="cloudy"></Weather>

export const WeatherSunny = () => <Weather temperature={10} state="sunny"></Weather>