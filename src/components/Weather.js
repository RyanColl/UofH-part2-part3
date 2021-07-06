import { useState, useEffect } from 'react'
import axios from 'axios'
import accessKey from "../private/accessKey"
const Weather = (props) => {
    const [ weatherData, setWeatherData ] = useState([])
    useEffect(() => {
        axios
          .get(`api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${accessKey}`)
          .then(response => {
            console.log('promise fulfilled')
            setWeatherData(weatherData.concat(response.data))
          })
    }, [])
    return(
        <div>
            <p>{console.log(weatherData)}</p>
        </div>
    )
}
export default Weather