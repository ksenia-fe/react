import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isSpinner: false,
        };
    }

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
        this.setState({
            isLoggedIn: true,
        });
        this.showSpinner();
    };

    logOutHandler = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    render() {
        const button = this.state.isLoggedIn
            ? <Logout onLogout={this.logOutHandler}/>
            : <Login onLogin={this.logInHandler}/>

        return (
            <>
                {this.state.isSpinner
                    ? <Spinner size={50}/>
                    : button}
            </>
        );
    }
}

export default Auth


