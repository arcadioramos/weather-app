import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import AppFrame from './../components/AppFrame'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 19",
        "min": 30,
        "max": 45,
    },
    {
        "dayHour": "Sáb 20",
        "min": 10,
        "max": 25,
    },
    {
        "dayHour": "Dom 21",
        "min": 19,
        "max": 29,
    },
]
const forecastItemListExample = [
    { hour: 18, state: "sunny", temperature: 33, weekDay: "Jueves" },
    { hour: 6, state: "cloud", temperature: 20, weekDay: "Viernes" },
    { hour: 22, state: "cloudy", temperature: 22, weekDay: "Sábado" },
    { hour: 12, state: "sunny", temperature: 44, weekDay: "Domingo" },
    { hour: 15, state: "fog", temperature: 22, weekDay: "Lunes" },
]
const CityPage = props => {
    const city = "Guaymas"
    const country = "México"
    const state = "cloudy"
    const temperature = 31
    const humidity = 80
    const wind = 30
    const data = dataExample
    const forecastItemList = forecastItemListExample
    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid item container justify="center" alignItems="flex-end"
                    xs={12}>
                    <CityInfo city={city} country={country}  ></CityInfo>
                </Grid>
                <Grid container item xs={12} justify="center">

                    <Weather state={state} temperature={temperature}></Weather>


                    <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>


                </Grid>
                <Grid item>
                    <ForecastChart data={data}></ForecastChart>
                </Grid>
                <Grid item>
                    <Forecast forecastItemList={forecastItemList}></Forecast>
                </Grid>
            </Grid>
        </AppFrame>
    )
}

CityPage.propTypes = {

}

export default CityPage
