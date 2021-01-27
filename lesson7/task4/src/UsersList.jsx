import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 4,
      listOfUsers: this.props.users
        .map((user) => <User user={user} key={user.id} />)
        .slice(0, this.itemsPerPage),
    };
  }

  goPrev = () => {
    console.log(`it will be goPrev func here`);
  };

  goNext = () => {
    console.log(`it will be goNext func here`);
  };
  render() {
    return (
      <>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={3}
          totalItems={15}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">{this.state.listOfUsers}</ul>
      </>
    );
  }
}

export default UsersList;
