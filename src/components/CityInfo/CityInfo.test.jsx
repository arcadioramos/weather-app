import React from 'react'
import {render} from '@testing-library/react'
import 'jest-dom/extend-expect'
import CityInfo from './CityInfo' //SUT: Subject under testing
test("CityInfo render", async () =>{
   //AAA
   //Arrange
   //Act
   const city = "Guaymas";
   const country ="México";
   //Render: renderiza el componente y retorna una serie de funciones en éste caso se utiliza find all by role
   const {findAllByRole} = render(<CityInfo city={city} country={country}></CityInfo>)
   //Assert
   //Find all by role nos va a buscar en este caso todos los componentes que sean heading(h1,h2,h3...)
   const cityAndCountryComponents = await findAllByRole("heading")

   //¿Cuándo el test va a ser correcto?
   //Definición
   //Cuando en el primer elemento(heading) se encuentre la ciudad "Guaymas"
   //y cuando en el segundo elemento se encuentre el país "México"

   expect(cityAndCountryComponents[0]).toHaveTextContent(city);
   expect(cityAndCountryComponents[1]).toHaveTextContent(country);

   //Si estas condiciones se cumplen ( expect), el test está ok

})