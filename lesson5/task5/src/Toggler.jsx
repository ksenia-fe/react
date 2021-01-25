import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Off',
    };
  }

  toogleHandler = () => {
    this.setState({
      text: this.state.text === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.toogleHandler}>
        {this.state.text}
      </button>
    );
  }
}

export default Toggler;
