import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }

  logInHandler = () => {
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;

    if (isProcessing) {
      return <Spinner size={50} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }
    return <Login onLogin={this.logInHandler} />;
  }
}

export default Auth;

// algo - Andrey
// 1. show login btn by default
// 2. show spinner after login click & hide login
// 3. show logout after 2 sec & hide spinner
// 4. show Login after clicking and hide logout btn

// algo - Alexey Kalaida
// 1. set a state for login and Spinner
// 2. write a function for login btn that hide login button and shows spinner for 2sec
// 3. write a function for logout btn that hide it and shows login button
// 4. write a condition that toggles the buttons depends on the state

// algo
// 1. create isLoggedIn prop in state to control buttons & isSpinner - for spinner
// 2. render login btn first
// 3. when login btn is clicked, display spinner then logout btn()
// 3.1  isLoggedIn: true
// 3.2 isSpinner: true for 2 sec
// 3.2 after 2 sec show logout btn
// 4 logout btn onClick={change isLoggedIn ti false}
