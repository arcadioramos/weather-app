import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    { city: "Hermosillo", country: "México" },
    { city: "Guaymas", country: "México" },
    { city: "Phoenix", country: "United States" }
]

test("CitiList renders", async () => {
    //AAA Arrange Act Assert
    const { findAllByRole } = render(<CityList cities={cities}></CityList>)
    const items = await findAllByRole("listitem")
    expect(items).toHaveLength(3)
})

test("CityList click on item", async () => {
    //Debemos simular una acción del usuario: click sobre un item
    //para eso vamos a utilizar una función "Mock"

    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}></CityList>)
    const items = await findAllByRole("listitem")
    //Sigue simular la acción del método utilizando fireEvent
    //fireEvent es parte de la librería testing-library/react
    fireEvent.click(items[0])

    //¿Ahora que tuvo que suceder?
    //Se debió llamar a la función fnClickOnItem UNA única vez
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

})