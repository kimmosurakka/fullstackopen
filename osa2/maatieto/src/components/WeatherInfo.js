import axios from "axios"
import { useEffect, useState } from "react"

const WeatherInfo = ({ city }) => {
    const [weather, setWeather] = useState(null)

    useEffect(()=>{
      const apiKey = process.env.REACT_APP_API_KEY
      if (!apiKey) {
          window.alert('REACT_APP_API_KEY not set!')
          return
      }
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => {
        // console.log('Weather:', response.data)
        setWeather(response.data)
      })
    }, [city])

    console.log('env:', process.env)
    console.log('API_KEY:', process.env.OPENWEATHERMAP_API_KEY)

    if (city === null || weather === null) {
        return null
    }

    const icon = weather.weather[0].icon
    return (
        <div>
            <h4>Weather in {city}</h4>
            {icon &&
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={capitalizeFirstLetter(weather.weather[0].description)}
                    title={capitalizeFirstLetter(weather.weather[0].description)}
                     />}
            <div>Temperature {(weather.main.temp - 273.15).toFixed(1)} °C</div>
            <div>Wind {weather.wind.speed} m/s</div>
        </div>
    )
}

const capitalizeFirstLetter = (s) => {
    return s && s.charAt(0).toUpperCase() + s.slice(1)
}

export default WeatherInfo