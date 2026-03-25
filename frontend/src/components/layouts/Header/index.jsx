import Button from '../../ui/Button'
import Logo from '../../ui/Logo'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  const token = localStorage.getItem('token')

  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__actions">
        <Button className="button--transparent button--link header__actions-item">
          <Link to="/add-article">Добавить статью</Link>
        </Button>
        {!token &&
          <>
            <Button className="header__actions-item">
              <Link to="/login">Войти</Link>
            </Button>
            <Button className="header__actions-item">
              <Link to="/register">Регистрация</Link>
            </Button>
          </>
        }
      </div>
    </header>
  )
}

export default Header
