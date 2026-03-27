import { useState } from "react";
import { register } from "@/api/auth";
import { useNavigate, Link } from "react-router-dom";
import Field from '@/components/ui/Field'
import Button from '../../../components/ui/Button'

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await register(name, email, password);

      alert("Аккаунт создан");
      navigate("/login");
    } catch {
      alert("Ошибка регистрации");
    }
  }

  return (
    <div className="auth container">
      <h1 className="auth__title">Регистрация</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <Field
          type="text"
          placeholder="Введите имя"
          value={name}
          label="Имя пользователя *"
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <Button type="submit">Зарегистрироваться</Button>
        <Button className="button--transparent button--link">
          <Link to="/login">Есть аккаунт? Войти</Link>
        </Button>
      </form>
    </div>
  );
}

export default RegisterPage;
