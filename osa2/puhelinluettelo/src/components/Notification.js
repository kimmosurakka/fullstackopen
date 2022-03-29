import PropTypes from 'prop-types'

const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }
  return (
    <div className={isError ? 'error' :'notification'}>
      {message}
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string,
  isError: PropTypes.bool.isRequired
}
export default Notification