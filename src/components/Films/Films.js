import { Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Film from '../Film/Film';
import './films.css';

export default function Films(props) {
  // state inside Planets, shared to Planet via props
  // second approach
  const [list, setList] = useState([]);

  useEffect(() => {
    (function getFilms() {
      let url = 'https://swapi.dev/api/films/';
      fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
          setList(data.results);
        })
        .catch(console.warn);
    })();
  }, []);

  function findFilm(id) {
    return list.find((item, index) => parseInt(id) === index + 1);
  }
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
      <div className="details">
        <Route path="/films/:id">
          <Film findFilm={findFilm} />
        </Route>
      </div>
    </>
  );
}
