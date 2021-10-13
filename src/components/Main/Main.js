import './main.css';
import Home from '../Home/Home';
import Sub from '../Sub/Sub';
import Films from '../Films/Films';
import Film from '../Film/Film';
import People from '../People/People';
import Person from '../Person/Person';
import Planets from '../Planets/Planets';
import Planet from '../Planet/Planet';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Main(props) {
  //we could put state here to hold the list to share with children
  const { pathname } = useLocation();
  const { keyword } = props;
  const [people, setPeople] = useState([]); //list of people
  const [planets, setPlanets] = useState([]); //list of planets
  const [films, setFilms] = useState([]); //list of films

  useEffect(() => {
    (async function () {
      let url = 'https://swapi.dev/api';
      if (pathname.indexOf('/people') > -1) {
        let resp = await fetch(`${url}/people?search=${keyword}`);
        let data = await resp.json();
        setPeople(data.results);
      }
      if (pathname.indexOf('/films') > -1) {
        let resp = await fetch(`${url}/films?search=${keyword}`);
        let data = await resp.json();
        setFilms(data.results);
      }
      if (pathname.indexOf('/planets') > -1) {
        let resp = await fetch(`${url}/planets?search=${keyword}`);
        let data = await resp.json();
        setPlanets(data.results);
      }
    })();
  }, [pathname, keyword]); //run this each time the route changes

  return (
    <div className="mainContent">
      <Switch>
        <Route path="/films">
          <Films list={films} />
          <Route path="/films/:id">
            <Film list={films} />
          </Route>
        </Route>
        <Route path="/planets">
          <Planets list={planets} />
          <Route path="/planets/:id">
            <Planet list={planets} />
          </Route>
        </Route>

        <Route path="/people">
          <People list={people} />
          {/* People is passed prop with fetch results */}
          <Route path="/people/:id">
            <Person list={people} />
            {/* Person is passed prop with fetch results */}
          </Route>
        </Route>

        <Route
          path="/"
          exact
          render={() => {
            let name = ['Kylo', 'Rey', 'Luke'];

            return (
              <Home name={name} active={false} time={new Date() - 50000000}>
                <Sub />
                <Sub />
              </Home>
            );
          }}
        />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
