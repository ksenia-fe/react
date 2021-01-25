import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  createUser = (event) => {
    const formEl = document.querySelectorAll('.form-input');
    event.preventDefault();

    console.log({ ...[...formEl].map((el) => el.value) });
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
