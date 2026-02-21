import './Logo.scss'
import {Link} from 'react-router-dom'

const Logo = ({ className }) => (
  <Link to="/" className={`logo ${className}`}>
    ProHealth
  </Link>
);

export default Logo;
