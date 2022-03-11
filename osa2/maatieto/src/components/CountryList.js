const CountryList = ({ countries }) => {
  return (
    <div>
      {countries.map(
      c => <div key={c.cioc}>{c.name.common}</div>)}
    </div>
  )
}

export default CountryList