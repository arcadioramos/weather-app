import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'


const renderCityAndCountry = cityAndCountry => {
    const { city, country } = cityAndCountry
    //li : es un item en html que sirve para poner un item
    return (

        <li key={city}>
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
const CityList = ({ cities }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default CityList
