import './main.css';
import Home from '../Home/Home';
import Sub from '../Sub/Sub';
import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import useStarWars from '../../hooks/useStarWars';

export default function Main(props) {
  //we could put state here to hold the list to share with children
  const Films = lazy(() => import('../Films/Films'));
  const Film = lazy(() => import('../Film/Film'));
  const People = lazy(() => import('../People/People'));
  const Person = lazy(() => import('../Person/Person'));
  const Planets = lazy(() => import('../Planets/Planets'));
  const Planet = lazy(() => import('../Planet/Planet'));

  // const { pathname } = useLocation();
  const { keyword, category } = props;
  const [people, setPeople] = useStarWars('people'); //list of people
  const [planets, setPlanets] = useStarWars('planets'); //list of planets
  const [films, setFilms] = useStarWars('films'); //list of films

  useEffect(() => {
    switch (category) {
      case 'people':
        setPeople(keyword);
        break;
      case 'films':
        setFilms(keyword);
        break;
      case 'planets':
        setPlanets(keyword);
        break;
      default:
    }
    window.scrollTo(0, 0);
  }, [category, keyword, setPeople, setFilms, setPlanets]); //run this each time the route changes

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
