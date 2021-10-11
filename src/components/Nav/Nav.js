// import Link from '../Link/Link';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default function Nav(props) {
  return (
    <nav className="mainnav">
      <NavLink activeClassName="activeLink" to="/films">
        Films
      </NavLink>
      <NavLink activeClassName="activeLink" to="/people">
        People
      </NavLink>
      <NavLink activeClassName="activeLink" to="/planets">
        Planets
      </NavLink>
    </nav>
  );
}
