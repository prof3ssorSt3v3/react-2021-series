import './main.css';
import Home from '../Home/Home';
import Sub from '../Sub/Sub';
// Lazy Load this section /////
// import Films from '../Films/Films';
// import Film from '../Film/Film';
// import People from '../People/People';
// import Person from '../Person/Person';
// import Planets from '../Planets/Planets';
// import Planet from '../Planet/Planet';
// Lazy Load this section ////
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

export default function Main(props) {
  //we could put state here to hold the list to share with children
  const Films = lazy(() => import('../Films/Films'));
  const Film = lazy(() => import('../Film/Film'));
  const People = lazy(() => import('../People/People'));
  const Person = lazy(() => import('../Person/Person'));
  const Planets = lazy(() => import('../Planets/Planets'));
  const Planet = lazy(() => import('../Planet/Planet'));

  const { pathname } = useLocation();
  const { keyword } = props;
  const [people, setPeople] = useState([]); //list of people
  const [planets, setPlanets] = useState([]); //list of planets
  const [films, setFilms] = useState([]); //list of films

  useEffect(() => {
    (async function () {
      let url = 'https://swapi.dev/api';
      if (pathname.indexOf('/people') > -1) {
        if (people.length === 0) {
          axios
            .get(`${url}/people?search=${keyword}`)
            .then((resp) => {
              let data = resp.data; //resp.status, resp.statusText
              //compare results update people ONLY if changed
              setPeople(data.results);
            })
            .catch(console.error);
        }
        // let resp = await fetch(`${url}/people?search=${keyword}`);
        // let data = await resp.json();
        // setPeople(data.results);
      }
      if (pathname.indexOf('/films') > -1) {
        if (films.length === 0) {
          let resp = await fetch(`${url}/films?search=${keyword}`);
          let data = await resp.json();
          setFilms(data.results);
        }
      }
      if (pathname.indexOf('/planets') > -1) {
        if (planets.length === 0) {
          let resp = await fetch(`${url}/planets?search=${keyword}`);
          let data = await resp.json();
          setPlanets(data.results);
        }
      }
    })();
  }, [pathname, keyword, people, films, planets]); //run this each time the route changes

  return (
    <div className="mainContent">
      <Switch>
        <Route path="/films">
          <Suspense fallback={<Spinner>Loading Films</Spinner>}>
            <Films list={films} />
          </Suspense>
          <Route path="/films/:id">
            <Suspense fallback={<Spinner>Loading Details</Spinner>}>
              <Film list={films} />
            </Suspense>
          </Route>
        </Route>
        <Route path="/planets">
          <Suspense fallback={<Spinner>Loading Planets</Spinner>}>
            <Planets list={planets} />
          </Suspense>
          <Route path="/planets/:id">
            <Suspense fallback={<Spinner>Loading Details</Spinner>}>
              <Planet list={planets} />
            </Suspense>
          </Route>
        </Route>

        <Route path="/people">
          <Suspense fallback={<Spinner>Loading People</Spinner>}>
            <People list={people} />
          </Suspense>
          {/* People is passed prop with fetch results */}
          <Route path="/people/:id">
            <Suspense fallback={<Spinner>Loading Details</Spinner>}>
              <Person list={people} />
            </Suspense>
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
