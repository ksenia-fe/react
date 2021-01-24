import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Status from './ConnectionStatus.jsx'

const rootEl = document.querySelector('#root');

ReactDOM.render(<Status/>, rootEl);