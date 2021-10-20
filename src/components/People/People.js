import { NavLink } from 'react-router-dom';
import './people.css';
import { useFav } from '../../context/FavContext';
import Spinner from '../Spinner/Spinner';
import { useState, useEffect } from 'react';

export default function People(props) {
  //state fetch done in Main.js and passed as props.list
  //props.list also passed to Person
  //destructure to get list
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
    <div className="results">
      <h2>People List</h2>
      {!loaded && <Spinner>LOADING PEOPLE</Spinner>}
      {list.length === 0 && <p>No people...</p>}
      {list.map((item, index) => (
        <p key={item.name}>
          <NavLink activeClassName="activeLink" to={`/people/${index + 1}`}>
            {item.name}
            {fav.type === 'people' && index + 1 === parseInt(fav.id) && (
              <>
                <span className="material-icons">favorite</span> FAVOURITE!
              </>
            )}
          </NavLink>
        </p>
      ))}
    </div>
  );
}
