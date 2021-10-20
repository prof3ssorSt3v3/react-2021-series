import { NavLink } from 'react-router-dom';
import './planets.css';
import { useFav } from '../../context/FavContext';
import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
export default function Planets(props) {
  const { list } = props;
  const [fav] = useFav();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timmy;
    if (list.length > 0) {
      timmy = setTimeout(setLoaded, 300, true);
    } else {
      //on initial render
      //get rid of spinner after a default time
      //same as axios timeout
      timmy = setTimeout(setLoaded, 4000, true);
    }
    return () => {
      clearTimeout(timmy);
    };
  }, [list]);

  return (
    <>
      <div className="results">
        <h2>Planet List</h2>
        {!loaded && <Spinner>LOADING PLANETS</Spinner>}
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
