import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox.jsx';

const rootEl = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={['do u wanna']}/>, rootEl);