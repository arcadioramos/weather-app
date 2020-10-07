import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const MainPage = props => {
        const history = useHistory();
        const onClickHandler = () =>{
            //history push nos permite trabajar con la url y cambiarla por programación
            history.push("/city ")
        }
    return (
        <div>
            MainPage
            <button onClick={onClickHandler}>Ir a City Page</button>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage
