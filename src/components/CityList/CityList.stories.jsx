import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default{
    title: "CityList",
    component: CityList,
}
const cities= [
    {city:"Hermosillo", country:"México"},
    {city:"Guaymas", country:"México"},
    {city:"Phoenix",country:"United States"}
]
export const CityListExample=() => <CityList cities={cities} onClickCity={action("Click en city")}></CityList>
