import './LoginForm.scss'
import {login} from '@/api/auth'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

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
    } catch (err) {
      alert("Ошибка входа");
    }
  }

  return (
    <div className="auth">
      <h1>Вход</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginForm