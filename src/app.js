import React from "react";
import "./styles/app.css";
import Info from "./Info";
import Home from "./Home";

import { Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/info/:id" component={Info} />
      <Route path="/" component={Home} />
      <Redirect from="/" to="/home" />
    </Switch>
  </div>
);

export default App;
