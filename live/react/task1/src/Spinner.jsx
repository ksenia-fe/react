import React from 'react';

//input: number
// output: jsx
const Spinner = ({ size }) => {
  return (
    <span className="spinner" style={{ width: size, height: size }}></span>
  );
};

export default Spinner;
