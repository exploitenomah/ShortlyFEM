
type inputProptypes = {
  type: string,
  extraClasses?: string,
  handleChange: Function,
  placeholder?: string
  value: string
}
const Input = ({
  type,
  extraClasses,
  placeholder,
  value,
  handleChange }: inputProptypes): JSX.Element => {

  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`block w-full px-3 py-2 rounded-lg  ${extraClasses}`}
      value={value}
      onChange={(e) => handleChange(e)} />
  )
}

export default Input