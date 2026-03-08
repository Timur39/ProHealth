import './Field.scss'

const Field = (props) => {
  const {
    className = '',
    isTextArea = false,
    rows = 4,
    cols = 40,
    name,
    label,
    type,
    value,
    placeholder,
    ...rest
  } = props

  return (
    <div className={`field ${className}`}>
      <label htmlFor={name} className="field__label">{label}</label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          cols={cols}
          value={value}
          placeholder={placeholder}
          className="field__input"
          {...rest}
        />
      ) :
      (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          className="field__input"
          {...rest}
        />
      )}
    </div>
  )
}

export default Field