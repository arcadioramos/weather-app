import React from 'react'
import ForecastChart from './ForecastChart'

export default {
    title: "ForecastChart",
    component: ForecastChart
}

const data=[
    {
        "dayHour":"Jue 18",
        "min":14,
        "max":22,
    },
    {
        "dayHour":"Vie 19",
        "min":30,
        "max":45,
    },
    {
        "dayHour":"Sáb 20",
        "min":10,
        "max":25,
    },
    {
        "dayHour":"Dom 21",
        "min":19,
        "max":29,
    },
]

export const ForecastChartExample=()=>(
    <ForecastChart data={data}></ForecastChart>
)

