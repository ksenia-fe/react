import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx'

const rootEl = document.querySelector('#root');

ReactDOM.render(<Greeting firstName='John' lastName='Doe' birthDate={new Date('2004-01-01')}/>, rootEl);