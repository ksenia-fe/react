import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  createUser = (user) => {
    console.log(user);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
