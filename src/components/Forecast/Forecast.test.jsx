import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList= [
    {hour: 18, state:"sunny", temperature:33,weekDay:"Jueves"},
    {hour: 6, state:"cloud", temperature:20,weekDay:"Viernes"},
    {hour: 22, state:"cloudy", temperature:22,weekDay:"Sábado"},
    {hour: 12, state:"sunny", temperature:44,weekDay:"Domingo"},
    {hour: 15, state:"fog", temperature:22,weekDay:"Lunes"},
]
test('Forecast render',async()=>{
    //¿Cómo encontrar por id?
    //findAllByTestId nos va a permitir encontrar cada item con ésta marca
    const { findAllByTestId} = render(<Forecast forecastItemList={forecastItemList}></Forecast>)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(5)
})