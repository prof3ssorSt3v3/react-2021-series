import { NavLink } from 'react-router-dom';
import './planets.css';

export default function Planets(props) {
  const { list } = props;

  return (
    <>
      <div className="results">
        <h2>Planet List</h2>

        {list.length === 0 && <p>No planets...</p>}
        {list.map((planet, index) => (
          <p key={planet.name}>
            <NavLink activeClassName="activeLink" to={`/planets/${index + 1}`}>
              {planet.name}
            </NavLink>
          </p>
        ))}
      </div>
    </>
  );
}
