import React, { Component, useEffect, useState } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start,
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, props.interval);
  }
  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

// TO DO
// const Counter = ({ start, interval }) => {
//   const [counter, setCounter] = useState(start);

//   useEffect(() => {
//     setInterval(() => {
//       setCounter(counter + 1);
//     }, interval);

//     // return () => {
//     //   intervalId;
//     // };
//   }, [counter]);

//   return <div className="counter">{counter}</div>;
// };

export default Counter;
