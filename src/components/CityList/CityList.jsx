import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'


const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry
    //li : es un item en html que sirve para poner un item
    return (

        <li key={city} onClick={eventOnClickCity}>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item
                    md={8} 
                    xs={12}>
                    <CityInfo city={city} country={country}></CityInfo>
                </Grid>
                <Grid item
                    md={4}
                    xs={12}>
                    <Weather temperature={10} state="rain"></Weather>
                </Grid>
            </Grid>
        </li>
    )
    
}

//cities: es un array, y en cada item tiene que tener la ciudad pero además debe tener el country
//ul: tag de html para listar no ordenadas
//renderCityAndCountry se va a convertir en una función que retorna otra función
const CityList = ({ cities,onClickCity }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}
//Mejorar validación
CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
