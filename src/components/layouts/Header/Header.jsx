import Button from '../../ui/Button/Button'
import Logo from '../../ui/Logo/Logo'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__actions">
        <Button className="button--transparent button--link header__actions-item">
          <Link to="/add-article">Добавить статью</Link>
        </Button>
        <Button className="header__actions-item">Войти/Регистрация</Button>
      </div>
    </header>
  )
}

export default Header
