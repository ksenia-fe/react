import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import './index.scss';

const rootEl = document.querySelector('#root');

ReactDOM.render(<Search name="Tom" />, rootEl);
