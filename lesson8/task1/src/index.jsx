import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Demo from './Demo.jsx'

const rootEl = document.querySelector('#root');

ReactDOM.render(<Demo number={42}/>, rootEl);