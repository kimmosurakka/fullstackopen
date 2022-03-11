import InputField from './InputField'

const FilterForm = ({ inputLabel, filter, setFilter, handleFilterChange }) => {
  return (
    <form onSubmit={handleFilterChange}>
      <InputField
        label={inputLabel}
        value={filter}
        setValue={setFilter} />
    </form>
  )
}

export default FilterForm