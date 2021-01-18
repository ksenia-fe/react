import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const element = React.createElement('h1', { className: 'title' }, 'Todo List');

ReactDOM.render(element, rootElement);
