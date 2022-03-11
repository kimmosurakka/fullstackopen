const CountryInfo = ({ country }) => {
  return (
    <div>
      <h3>{country.name.common}</h3>
      <div>capital {country.capital.join(', ')}</div>
      <div>area {country.area}</div>
      <h4>Languages:</h4>
      <ul>
        {Object.entries(country.languages).map(
          ([key,value]) => <li key={key}>{value}</li>)}
      </ul>
      <div/>
      <img src={country.flags.png} />
    </div>
  )
}

export default CountryInfo