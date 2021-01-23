import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Status from './Status.jsx'

const rootEl = document.querySelector('#root');

ReactDOM.render(<Status isOnline={false}/>, rootEl);

// 1. в индекс отрендерить статус ++

// 2.1 в статусе отрендерить online or offline ++

// 3. in Online return span with text 'All good!' ++
// 4. in Offline return span with text 'Offline' and Reconnect button ++