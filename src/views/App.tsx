import React from 'react';
import MainPage from './MainPage';
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
      </Switch>
    </Router>
  );
}

export default App;