import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
const cities = [
    { city: "Hermosillo", country: "México" },
    { city: "Guaymas", country: "México" },
    { city: "Phoenix", country: "United States" }
]
const MainPage = props => {
    const history = useHistory();
    const onClickHandler = () => {
        //history push nos permite trabajar con la url y cambiarla por programación
        history.push("/city")
    }
    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities}
                    onClickCity={onClickHandler}></CityList>
            </Paper>
        </AppFrame>
    )
}

MainPage.propTypes = {

}

export default MainPage
