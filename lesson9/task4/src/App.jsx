import React from 'react';
import UsersList from './UsersList.jsx';

const users = class App extends React.Component {
  render() {
    return (
      <div>
        <div className="filter">
          <span className="filter__count">5</span>
          <input type="text" className="filter__input" />
        </div>
        <ul className="users">
          <UsersList users={users} />
        </ul>
      </div>
    );
  }
};

export default App;
