import CountryInfo from './CountryInfo'
import CountryList from './CountryList'

const ResultForm = ({countries, filter}) => {
  const filterUpperCase = filter.toLocaleUpperCase()
  const matches = countries.filter(
    c => c.name.common.toLocaleUpperCase().includes(filterUpperCase))
  if (matches.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  } else if (matches.length > 1) {
    return (
      <CountryList countries={matches} />
    )
  } else if (matches.length === 1) {
    return (
      <CountryInfo country={matches[0]} />
    )
  } else return (
    <div>No matches.</div>
  )
}

export default ResultForm