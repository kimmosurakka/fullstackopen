import CountryInfo from './CountryInfo'
import CountryList from './CountryList'

const ResultForm = ({ countries, filter, selected, setSelected }) => {
  const filterUpperCase = filter.toLocaleUpperCase()
  const matches = countries.filter(
    c => c.name.common.toLocaleUpperCase().includes(filterUpperCase))
  if (matches.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  } else if (matches.length === 0) {
    return (
      <div>No matches.</div>
    )
  } else {
    const selectedCountry = matches.length === 1
      ? matches[0]
      : selected !== null ? countries.find(c => c.cca3 === selected)
      : null
    return (
      <>
        <CountryList
          countries={matches}
          selected={selected}
          setSelected={setSelected} />
        {selectedCountry !== null && <CountryInfo country={selectedCountry} />}
      </>
    )
  }
}

export default ResultForm