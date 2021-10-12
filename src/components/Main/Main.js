import './main.css';
import Home from '../Home/Home';
import Sub from '../Sub/Sub';
import Films from '../Films/Films';
import People from '../People/People';
import Person from '../Person/Person';
import Planets from '../Planets/Planets';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Main(props) {
  //we could put state here to hold the list to share with children
  const { pathname } = useLocation();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async function () {
      if (pathname.indexOf('/people') > -1) {
        let resp = await fetch('https://swapi.dev/api/people');
        let data = await resp.json();
        // console.log('Fetched the people. Updating people state');
        setPeople(data.results);
      }
    })();
  }, [pathname]);

  return (
    <div className="mainContent">
      <Switch>
        <Route path="/films">
          <Films />
          {/* Films holds state for fetch results */}
        </Route>
        <Route path="/planets">
          <Planets />
          {/* Planets holds state for fetch results */}
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
