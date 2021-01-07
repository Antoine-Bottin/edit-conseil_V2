import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Splash from './Splash'
import Home from './Home'


import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Splash}/>
        <Route path="/Home" exact component={Home}/>

      </Switch>
    </Router>
  );
}

export default App;
