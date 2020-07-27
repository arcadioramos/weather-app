import React, { PureComponent } from 'react'
import CityInfo from './CityInfo'
import 'typeface-roboto'
import CityList from '../CityList/CityList'

export default{
    title: "CityInfo",
    component: CityInfo,

}

export const CityExample = () => <CityInfo city={"Guaymas"} country={"Mexico"}></CityInfo>
