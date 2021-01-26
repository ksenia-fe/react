import React from 'react';

class UsersList extends React.Component {
  render() {
    return (
      <li className="user">
        <span className="user__name">Tad</span>
        <span className="user__age">18</span>
      </li>
      /* <li className="user">
            <span className="user__name">Tad</span>
            <span className="user__age">18</span>
          </li>
          <li className="user">
            <span className="user__name">Anna</span>
            <span className="user__age">45</span>
          </li> */
    );
  }
}

export default UsersList;
