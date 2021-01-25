import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={3} interval={2000} />
      <Counter start={11} interval={3000} />
    </>
  );
};

export default App;
