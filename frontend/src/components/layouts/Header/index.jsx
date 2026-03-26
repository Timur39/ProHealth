import Button from '../../ui/Button'
import Logo from '../../ui/Logo'
import './Header.scss'
import {Link, useNavigate} from 'react-router-dom'

const Header = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()


  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }

  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__actions">
        
        {token ? (
          <>
            <Button className="button--transparent button--link header__actions-item">
              <Link to="/add-article">Добавить статью</Link>
            </Button>
            <Button className="header__actions-item" onClick={handleLogout}>Выйти</Button>
          </>
        ) : (
          <Button className="header__actions-item">
            <Link to="/login">Войти</Link>
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header

// <Button className="header__actions-item">
//   <Link to="/register">Регистрация</Link>
// </Button>
