import PropTypes from 'prop-types'

const FilterForm = ({ setFilter, filter, handleFilterChange }) => {
  return <form onSubmit={setFilter}>
    <div>
      filter shown with: <input value={filter}
        onChange={handleFilterChange} />
    </div>
  </form>
}

FilterForm.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
}

export default FilterForm