import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
const cities= [
    {city:"Hermosillo", country:"México"},
    {city:"Guaymas", country:"México"},
    {city:"Phoenix",country:"United States"}
]
const MainPage = props => {
        const history = useHistory();
        const onClickHandler = () =>{
            //history push nos permite trabajar con la url y cambiarla por programación
            history.push("/city")
        }
    return (
        <div>
           <h2>Lista de ciudades</h2>
            <CityList cities={cities} 
            onClickCity={onClickHandler}></CityList>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage
