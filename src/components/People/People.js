import { NavLink } from 'react-router-dom';
import './people.css';

export default function People({ list }) {
  //state fetch done in Main.js and passed as props.list
  //props.list also passed to Person
  //destructure to get list

  return (
    <div className="results">
      <h2>People List</h2>
      {list.length === 0 && <p>No people...</p>}
      {list.map((item, index) => (
        <p key={item.name}>
          <NavLink activeClassName="activeLink" to={`/people/${index + 1}`}>
            {item.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
}
