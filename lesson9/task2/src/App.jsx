import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        name: '',
        student: '',
        occupation: '',
        about: '',
      });
  }

  createUser = (user) => {};

  onSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return <UserForm onSubmit={this.onSubmit} />;
  }
}

export default App;
