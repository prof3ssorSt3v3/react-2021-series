import { NavLink } from 'react-router-dom';
import './films.css';
//if we just want the value we can import useFav() custom hook
import { useFav } from '../../context/FavContext';

export default function Films(props) {
  const { list } = props;
  const [fav] = useFav();

  return (
    <>
      <div className="results">
        <h2>Film List</h2>

        {list.length === 0 && <p>No films...</p>}
        {list.map((film, index) => (
          <p key={film.title}>
            <NavLink activeClassName="activeLink" to={`/films/${index + 1}`}>
              {film.title}{' '}
              {index + 1 === parseInt(fav.id) && (
                <>
                  <span className="material-icons">favorite</span> FAVOURITE!
                </>
              )}
            </NavLink>
          </p>
        ))}
      </div>
    </>
  );
}
