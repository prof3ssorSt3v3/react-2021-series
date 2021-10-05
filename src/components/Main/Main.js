import './main.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Films from '../Films/Films';
import People from '../People/People';
import Planets from '../Planets/Planets';

export default function Main(props) {
  return (
    <div className="mainContent">
      <Switch>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/planets">
          <Planets />
        </Route>
        <Route
          path="/"
          exact
          render={() => {
            return <Home />;
          }}
        />
      </Switch>
    </div>
  );
}
