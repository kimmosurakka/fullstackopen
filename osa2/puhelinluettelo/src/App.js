import { useState, useEffect } from 'react'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(allPersons => {
        setPersons(allPersons)
      })
  }, [])

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
      personService.add(newPerson)
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson))
      })
      setNewName('')
      setNewNumber('')
    }
  }

  const removePerson = (person) => {
    if (window.confirm(`Do you really want to remove ${person.name}?`)) {
      personService.remove(person.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm
        filter={filter}
        handleFilterChange={handleFilterChange}
        setFilter={setFilter} />
      <h3>Add new</h3>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addName={addName} />
        
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filter={filter}
        remove={removePerson} />
    </div>
  )

}

export default App