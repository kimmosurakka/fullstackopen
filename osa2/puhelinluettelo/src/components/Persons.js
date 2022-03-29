import PropTypes from 'prop-types'

const Persons = ({ persons, filter, remove }) => {
  const shownPersons = filter === ''
    ? persons
    : persons.filter(p => p.name.toLocaleUpperCase()
      .includes(filter.toLocaleUpperCase()))

  return (
    <div>
      {shownPersons.map(p =>
        <div key={p.id}>
          {p.name} {p.number}
          <button onClick={() => remove(p)}>Remove</button>
        </div>)}
    </div>
  )
}

Persons.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired
}

export default Persons