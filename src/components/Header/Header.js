import './header.css';
import Nav from '../Nav/Nav';

export default function Header(props) {
  // const title = props.title;

  return (
    <header className="masthead">
      <h1>{props.company}</h1>
      <Nav ttl={props.title} />
    </header>
  );
}
