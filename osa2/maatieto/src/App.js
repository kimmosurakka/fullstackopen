import { useState, useEffect } from "react"
import axios from 'axios'
import FilterForm from "./components/FilterForm"
import ResultForm from "./components/ResultForm"

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState(null)

  const handleFilterChange = () => {
    console.log('Filter set to', filter)
  }

  const filterEdited = (newValue) => {
    setSelected(null)
    setFilter(newValue)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data)
        console.log(`Received ${response.data.length} countries`)
      })
  }, [])
  return (
    <div>
      <h1>Maatieto</h1>
      <FilterForm
        inputLabel='Find countries'
        filter={filter}
        setFilter={filterEdited}
        handleFilterChange={handleFilterChange} />
      <ResultForm
        countries={countries}
        filter={filter}
        selected={selected}
        setSelected={setSelected} />
    </div>
  )
}

export default App