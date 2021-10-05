// import Link from '../Link/Link';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav(props) {
  return (
    <nav className="mainnav">
      <Link to="/films">Films</Link>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
    </nav>
  );
}
