import React from 'react';
import './app.css';
import Info from './Info';
import Home from './Home';

import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom"

export default function App() {
  const history = window.history.state;

  return (
    <div className="app">
      <Switch>
        <Route history={history} path='/info/:id' component={Info} />
        <Route history={history} path='/home' component={Home} />
        <Redirect from='/' to='/home'/>
      </Switch>
    </div>
  );
}
