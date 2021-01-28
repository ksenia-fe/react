import React from 'react';

//input: number
// output: jsx
const Spinner = ({ size }) => {
  const style = { width: size, height: size };

  return <span className="spinner" style={style}></span>;
};

export default Spinner;
