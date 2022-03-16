const Persons = ({ persons, filter }) => {
  const shownPersons = filter === ''
    ? persons
    : persons.filter(p => p.name.toLocaleUpperCase()
      .includes(filter.toLocaleUpperCase()))

  return (
    <div>
      {shownPersons.map(p => <div key={p.id}>{p.name} {p.number}</div>)}
    </div>
  )
}

export default Persons