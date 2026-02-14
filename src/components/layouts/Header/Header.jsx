import Button from '../../ui/Button/Button'
import Logo from '../../ui/Logo/Logo'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__actions">
        <Button className="button--transparent">
          Добавить статью
        </Button>
        <Button>Войти/Регистрация</Button>
      </div>
    </header>
  )
}

export default Header
