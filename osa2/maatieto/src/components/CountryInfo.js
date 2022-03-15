import WeatherInfo from "./WeatherInfo"

const CountryInfo = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital: {country.capital.join(', ')}</div>
      <div>area: {country.area}</div>
      <h4>Languages:</h4>
      <ul>
        {Object.entries(country.languages).map(
          ([key, value]) => <li key={key}>{value}</li>)}
      </ul>
      <div />
      <img src={country.flags.png} />
      <WeatherInfo city={country.capital[0]} />
    </div>
  )
}

export default CountryInfo