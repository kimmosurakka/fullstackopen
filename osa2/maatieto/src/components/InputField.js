const InputField = ({ label, value, setValue }) => {

  return (
    <div>
      {label+' '}
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)} />
    </div>
  )
}

export default InputField