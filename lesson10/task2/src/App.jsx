import React from 'react';
import Profile from './Profile.jsx';
import ShoppingCart from './ShoppingCart.jsx';

class App extends React.Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <h1 className="title">Hello, {userData.firstName}</h1>
        <main className="content">
          <ShoppingCart userData={this.state.userData} count={2} />
          <Profile
            userData={this.state.userData}
            onChangeHandler={this.onChangeHandler}
          />
        </main>
      </div>
    );
  }
}

export default App;
