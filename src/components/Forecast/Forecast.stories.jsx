import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}
const forecastItemList= [
    {hour: 18, state:"sunny", temperature:33,weekDay:"Jueves"},
    {hour: 6, state:"cloud", temperature:20,weekDay:"Viernes"},
    {hour: 22, state:"cloudy", temperature:22,weekDay:"Sábado"},
    {hour: 12, state:"sunny", temperature:44,weekDay:"Domingo"},
    {hour: 15, state:"fog", temperature:22,weekDay:"Lunes"},
]
export const ForecastExample = () =>(<Forecast forecastItemList={forecastItemList} />)