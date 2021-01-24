import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import User from './User.jsx'

const rootEl = document.querySelector('#root');

ReactDOM.render(<User userId={'tumblr'}/>, rootEl);