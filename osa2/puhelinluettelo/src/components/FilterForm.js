const FilterForm = ({setFilter, filter, handleFilterChange}) => {
  return <form onSubmit={setFilter}>
    <div>
      filter shown with: <input value={filter}
        onChange={handleFilterChange} />
    </div>
  </form>
}

export default FilterForm