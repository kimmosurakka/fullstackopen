import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '0401234567',
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.find(p => p.name === newName) !== undefined) {
      window.alert(`${newName} is already added to the phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const shownPersons = filter ===''
    ? persons
    : persons.filter(p => p.name.toLocaleUpperCase()
        .includes(filter.toLocaleUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={setFilter}>
        <div>
          filter shown with: <input value={filter}
            onChange={handleFilterChange} />
        </div>
      </form>
      <h3>Add new</h3>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      {shownPersons.map(p => <div key={p.name}>{p.name} {p.number}</div>)}
    </div>
  )

}

export default App