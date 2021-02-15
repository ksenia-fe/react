import React, { useState } from 'react';

const ColorPicker = () => {
  const [title, setTitle] = useState(null);

  const setColorText = (color) => {
    setTitle(color);
  };

  const clearTitle = () => setTitle(null);

  return (
    <div>
      <div className="picker__title">{title}</div>
      <div>
        <button
          className="picker__button picker__button_coral"
          onMouseOver={() => setColorText('Coral')}
          onMouseOut={clearTitle}
        ></button>
        <button
          className="picker__button picker__button_aqua"
          onMouseOver={() => setColorText('Aqua')}
          onMouseOut={clearTitle}
        ></button>
        <button
          className="picker__button picker__button_bisque"
          onMouseOver={() => setColorText('Bisque')}
          onMouseOut={clearTitle}
        ></button>
      </div>
    </div>
  );
};

export default ColorPicker;
