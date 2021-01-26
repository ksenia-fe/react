import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4,
      filterText: '',
    };
  }

  inputHandler = (event) => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Filter
          onChange={this.inputHandler}
          text={this.state.text}
          count={this.state.count}
        />
        <ul className="users">
          {this.props.users
            .slice()
            .map((user) => <User key={user.id} {...user} />)
            .filter((user) =>
              user.props.name
                .toLowerCase()
                .includes(this.state.filterText.toLowerCase())
            )
            .slice(0, this.state.count)}
        </ul>
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
