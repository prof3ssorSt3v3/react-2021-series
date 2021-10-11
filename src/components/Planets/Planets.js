import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Planet from '../Planet/Planet';
import './planets.css';

export default function Planets(props) {
  // state inside Planets, shared to Planet via props
  // second approach
  const [list, setList] = useState([]);

  useEffect(() => {
    (function getPlanets() {
      let url = 'https://swapi.dev/api/planets/';
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

  function findPlanet(id) {
    return list.find((item, index) => parseInt(id) === index + 1);
  }
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
      <div className="details">
        <Route path="/planets/:id">
          <Planet findPlanet={findPlanet} />
        </Route>
      </div>
    </>
  );
}
