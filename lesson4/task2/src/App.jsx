import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location="Kiev" offset={10} />
      <Clock location="London" offset={3} />
      <Clock location="Berlin" offset={7} />
    </>
  );
};

export default App;
