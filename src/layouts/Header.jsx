import Button from '../components/Button'
import Logo from '../components/Logo'

const Header = () => {
  return (
    <header className="header">
      <Logo/>
      <button
        className="button --alt"
        type="button"
      >
        Добавить статью
      </button>
      <Button>Войти/Регистрация</Button>
    </header>
  )
}

export default Header