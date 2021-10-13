import { NavLink } from 'react-router-dom';
import './films.css';

export default function Films(props) {
  const { list } = props;

  return (
    <>
      <div className="results">
        <h2>Film List</h2>

        {list.length === 0 && <p>No films...</p>}
        {list.map((film, index) => (
          <p key={film.title}>
            <NavLink activeClassName="activeLink" to={`/films/${index + 1}`}>
              {film.title}
            </NavLink>
          </p>
        ))}
      </div>
    </>
  );
}
