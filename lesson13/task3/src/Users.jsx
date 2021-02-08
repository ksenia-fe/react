import React from 'react';
import User from './User';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Users = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <BrowserRouter>
        <Route>
          <ul className="navigation">
            <Route>
              <li className="navigation__item">
                <Link to={`${match.path}/github`}>Github</Link>
              </li>
            </Route>
            <Route>
              <li className="navigation__item">
                <Link to={`${match.path}/facebook`}>Facebook</Link>
              </li>
            </Route>
          </ul>
        </Route>

        <Switch>
          <Route exact path="/users">
            <span>Select a user please</span>
          </Route>
          <Route path={`${match.path}/:userId`} component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Users;
