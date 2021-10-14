import { NavLink } from 'react-router-dom';
import './planets.css';
import { useFav } from '../../context/FavContext';

export default function Planets(props) {
  const { list } = props;
  const [fav] = useFav();

  return (
    <>
      <div className="results">
        <h2>Planet List</h2>

        {list.length === 0 && <p>No planets...</p>}
        {list.map((planet, index) => (
          <p key={planet.name}>
            <NavLink activeClassName="activeLink" to={`/planets/${index + 1}`}>
              {planet.name}
              {fav.type === 'planets' && index + 1 === parseInt(fav.id) && (
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
