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
        <h1 className="title">
          {`Hello, ${userData.firstName} ${userData.lastName}`}
        </h1>
        <main className="content">
          <ShoppingCart userName={this.state.userData.firstName} />
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
