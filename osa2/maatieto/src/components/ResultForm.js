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
  } else if (matches.length > 1) {
    const selectedCountry = selected === null
      ? null : countries.find(c => c.cca3 === selected)
    return (
      <>
        <CountryList
          countries={matches}
          selected={selected}
          setSelected={setSelected} />
        {selectedCountry === null ? (<></>) :
          <CountryInfo country={selectedCountry} />}
      </>
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