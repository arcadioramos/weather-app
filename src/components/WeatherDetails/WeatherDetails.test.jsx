import React from 'react'
import { render} from '@testing-library/react'
import WeatherDetails from './WeatherDetails'


//findByText: Nos permite encontrar de acuerdo a un determinado texto si existe un elemento
test("Weather details render", async ()=>{

    const {findByText} = render(<WeatherDetails wind={10} humidity={80}></WeatherDetails>)
    //Al utilizar las barras utilizamos un REGEXP, una expresión regular
    const wind = await findByText(/10/)

    const humidity = await findByText(/80/)

    expect(wind).toHaveTextContent("Viento: 10 km/h")
    expect(humidity).toHaveTextContent("Húmedad: 80%")
})