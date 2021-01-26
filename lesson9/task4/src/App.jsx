import React from 'react';
import UsersList from './UsersList.jsx';

const users = [
  {
    name: 'Tom',
    age: 23,
    id: 'id-0',
  },
  {
    name: 'Ann',
    age: 9,
    id: 'id-1',
  },
  {
    name: 'Bob',
    age: 12,
    id: 'id-2',
  },
  {
    name: 'Ashley',
    age: 34,
    id: 'id-3',
  },
  {
    name: 'Mike',
    age: 19,
    id: 'id-4',
  },
];

class App extends React.Component {
  render() {
    return <UsersList users={users} />;
  }
}

export default App;
