import './Button.scss'

const Button = (props) => {
  const { className, children } = props

  return (
    <button className={`button ${className}`} type="submit">
      {children}
    </button>
  )
}

export default Button