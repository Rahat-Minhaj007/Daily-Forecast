import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import ForecastData from './components/FiveDaysForecast/ForecastData/ForecastData';
import ForecastVisual from './components/Visual/ForecastVisual/ForecastVisual';
import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import SignIn from './components/SignIn/SignIn';

function App() {
  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  return (
    <Router>
      {
        spinner && <Loader className='spinner'
          type="Bars"
          color="grey"
          height={80}
          width={80}
          timeout={4000}
        />
      }
      {!spinner &&
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/fiveDaysForecast">
            <ForecastData></ForecastData>
          </Route>
          <Route exact path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>}
    </Router>
  );
}

export default App;
