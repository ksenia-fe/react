import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
      // listOfUsers: this.props.users
      //   .map((user) => <User user={user} key={user.id} />)
      //   .slice(0, this.itemsPerPage),
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    return (
      <>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">
          {this.props.users
            .map((user) => <User user={user} key={user.id} />)
            .slice(0, this.state.itemsPerPage)}
        </ul>
      </>
    );
  }
}

export default UsersList;
