import './header.css';
import Nav from '../Nav/Nav';

export default function Header(props) {
  return (
    <header className="masthead">
      <h1>{props.company}</h1>
      <Nav />
    </header>
  );
}
