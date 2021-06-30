import React from 'react';
import MainPage from './MainPage';
import ContinentPage from './ContinentPage';
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
      </Switch>
    </Router>
  );
}

export default App;