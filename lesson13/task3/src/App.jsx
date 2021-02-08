import React from 'react';
import Users from './Users';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';

const app = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users" component={Users}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default app;
