import React from 'react';
import User from './User';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/users">
            <span>Select a user please</span>
          </Route>
        </Switch>
        <Route>
          <ul className="navigation">
            <Route>
              <li className="navigation__item">
                <Link to="/users/github">Github</Link>
              </li>
            </Route>
            <Route>
              <li className="navigation__item">
                <Link to="/users/facebook">Facebook</Link>
              </li>
            </Route>
          </ul>
        </Route>
      </BrowserRouter>

      <User />
    </div>
  );
};

export default Users;
