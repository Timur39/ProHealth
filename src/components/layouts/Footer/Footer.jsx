import Logo from '../../ui/Logo/Logo'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <Logo className="footer__logo"/>
      <div className="footer__socials">
        <ul className="footer__socials-list">
          <li className="footer__socials-item">
            <a className="footer__socials-link" href="https://t.me/timurshiplivcev" target="_blank">
              Telegram
            </a>
          </li>
          <li className="footer__socials-item">
            <a className="footer__socials-link" href="https://vk.com/id792366806" target="_blank">
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