import './LoginForm.scss'
import {login} from '@/api/auth'
import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Field from '@/components/ui/Field'
import Button from '../../../components/ui/Button'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await login(email, password);

      localStorage.setItem("token", data.access_token);

      navigate("/");
    } catch {
      alert("Ошибка входа");
    }
  }

  return (
    <div className="auth container">
      <h1 className='auth__title'>Вход</h1>
      <form className='auth__form' onSubmit={handleSubmit}>
        <Field
          type="email"
          placeholder="Введите email"
          value={email}
          label="Email *"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Field
          type="password"
          placeholder="Введите пароль"
          value={password}
          label="Пароль *"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Войти</Button>
        <Button className="button--transparent button--link">
          <Link to="/register">Нет аккаунта? Регистрация</Link>
        </Button>
      </form>
    </div>
  );
}

export default LoginForm