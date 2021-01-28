import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
  state = {
    logInBtn: false,
    logOutBtn: true,
    // isLoggedIn: false,
    isSpinner: false,
  };

  showSpinner = () => {
    this.setState({
      isSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        isSpinner: false,
      });
    }, 2000);
  };

  logInHandler = () => {
    this.showSpinner();
    this.setState({
      logInBtn: false,
    });
    setTimeout(() => {
      this.setState({
        logOutBtn: true,
      });
    }, 2000);
    // this.setState({
    //   // isLoggedIn: true,
    //   logOutBtn: true,
    // });
  };

  logOutHandler = () => {
    this.setState({
      logInBtn: true,
      logOutBtn: false,
    });
  };

  render() {
    const button = !this.state.logInBtn ? (
      <>
        {this.state.isSpinner ? <Spinner size={50} /> : null}
        {this.state.logOutBtn ? <Logout onLogout={this.logOutHandler} /> : null}
      </>
    ) : (
      <Login onLogin={this.logInHandler} />
    );

    return <>{button}</>;
  }
}

export default Auth;

// algo
// 1. create isLoggedIn prop in state to control buttons & isSpinner - for spinner
// 2. render login btn first
// 3. when login btn is clicked, display spinner then logout btn()
// 3.1  isLoggedIn: true
// 3.2 isSpinner: true for 2 sec
// 3.2 after 2 sec show logout btn
// 4 logout btn onClick={change isLoggedIn ti false}
