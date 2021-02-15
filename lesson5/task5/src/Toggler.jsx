import React, { useState } from 'react';

const Toggler = () => {
  const [text, setText] = useState('Off');

  const toggleHandler = () => {
    setText(text === 'Off' ? 'On' : 'Off');
  };

  return (
    <button className="toggler" onClick={toggleHandler}>
      {text}
    </button>
  );
};

export default Toggler;
