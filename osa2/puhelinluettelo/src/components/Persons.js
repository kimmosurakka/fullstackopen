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

export default Persons