import React from 'react';
import MainPage from './MainPage';
import ContinentPage from './ContinentPage';
import CountryPage from './CountryPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/continents" component={ContinentPage}/>
        <Route exact path="/continents/:id" component={CountryPage}/>
      </Switch>
    </Router>
  );
}

export default App;