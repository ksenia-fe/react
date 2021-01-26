import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  state = {
    count: 4,
    filterText: '',
  };

  inputHandler = (event) => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    const res = this.props.users
      .map((user) => <User key={user.id} {...user} />)
      .filter((user) =>
        user.props.name
          .toLowerCase()
          .includes(this.state.filterText.toLowerCase())
      );

    return (
      <div>
        <Filter
          onChange={this.inputHandler}
          text={this.state.text}
          count={res.length}
        />
        <ul className="users">{res}</ul>
      </div>
    );
  }
}

export default UsersList;

//1 ++
//2 ++
//3 ++
//4 --
//5 --
//6 --
//7 ++
//8 ++
//9 +-
