import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootEl = document.querySelector('#root');

const users = [
  {
    name: 'Tom',
    age: 12,
    id: '1',
  },
  {
    name: 'Ashley',
    age: 12,
    id: '2',
  },
  {
    name: 'Sam',
    age: 12,
    id: '3',
  },
  {
    name: 'Tom',
    age: 12,
    id: '4',
  },
  {
    name: 'Tom',
    age: 12,
    id: '5',
  },
];

ReactDOM.render(<UsersList users={users} />, rootEl);
