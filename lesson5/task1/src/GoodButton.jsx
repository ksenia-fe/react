import React, { Component } from 'react';

// task 1
// const GoodButton = () => (
//   <button className="fancy-button" onClick={() => alert('Good job!')}>
//     Click me!
//   </button>
// );

// task 2
class GoodButton extends Component {
  handleClick(event) {
    alert(event.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
