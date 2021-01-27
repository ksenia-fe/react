import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  logInHandler = () => {
    console.log('clicked');
  };

  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner size={50} />
      </>
    );
  }
}

export default Auth;
