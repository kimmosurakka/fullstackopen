const CountryList = ({ countries, selected, setSelected }) => {
  return (
    <div>
      {countries.map(
      c => (
        <div key={c.cca3}>
          {c.name.common}
          <button onClick={() => setSelected(c.cca3)} >
            {c.cca3===selected ? 'shown' : 'show'}
          </button></div>))}
    </div>
  )
}

export default CountryList