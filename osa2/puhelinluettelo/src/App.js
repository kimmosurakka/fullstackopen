import { useState, useEffect } from 'react'
import FilterForm from './components/FilterForm'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)

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

  const showNotification = (text) => {
    setNotification(text)
    setTimeout(() => setNotification(null), 1200)
  }

  const showError = (text) => {
    setError(text)
    setTimeout(() => setError(null), 2400)
  }

  const addName = (event) => {
    event.preventDefault()
    const oldPerson = persons.find(p => p.name === newName)
    if (oldPerson !== undefined) {
      updatePerson({ ...oldPerson, number: newNumber })
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      personService.add(newPerson)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setNewName('')
          setNewNumber('')
          showNotification(`Added ${addedPerson.name}`)
        })
        .catch(error => {
          console.error(error.response.data)
          showError(error.response.data.error)
        })
    }
  }

  const removePerson = (person) => {
    if (window.confirm(`Do you really want to remove ${person.name}?`)) {
      personService.remove(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
          showNotification(`Removed ${person.name}`)
        })
        .catch(() => {
          showError(`Information for ${person.name} was already removed`)
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }
  }

  const updatePerson = (person) => {
    const question = `${person.name} is already in the phonebook. Do you
      want to replace the number with ${person.number}?`
    if (window.confirm(question)) {
      personService.update(person.id, person)
        .then(changedPerson => {
          setPersons(persons.map(p => p.id === person.id ? changedPerson : p))
          showNotification(`${changedPerson.name} was updated`)
        })
        .catch(error => {
          if (error.response.status === 404) {
            showError(`Information for ${person.name} was already removed`)
            setPersons(persons.filter(p => p.id !== person.id))
          } else {
            showError(error.response.data.error)
          }
        })
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={error} isError={true} />
      <Notification message={notification} isError={false}/>
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