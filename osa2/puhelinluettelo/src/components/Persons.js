const Persons = ({ persons, filter }) => {
  const shownPersons = filter === ''
    ? persons
    : persons.filter(p => p.name.toLocaleUpperCase()
      .includes(filter.toLocaleUpperCase()))

  return (
    <div>
      {shownPersons.map(p => <div key={p.name}>{p.name} {p.number}</div>)}
    </div>
  )
}

export default Persons