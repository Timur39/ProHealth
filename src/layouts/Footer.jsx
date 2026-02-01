import Logo from '../components/Logo'

const Footer = () => {
  return (
    <footer>
      <Logo/>
      <div className="socials">
        <ul className="socials__list">
          <li className="socials__item">
            <a className="socials__link" href="/" >
              Telegram
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="/">
              Вконтакте
            </a>
          </li>
        </ul>
      </div>
      <p className="my-name">Timur Shiplivcev</p>
    </footer>
  )
}

export default Footer