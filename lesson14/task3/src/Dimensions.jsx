import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;

    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });

    const handlerResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({
        width: innerWidth,
        height: innerHeight,
      });
      window.addEventListener('resize', handlerResize);

      return () => {
        window.removeEventListener('resize', handlerResize);
      };
    };
  }, []);

  const { width, height } = dimensions;
  return (
    <div className="dimensions">
      {width}px - {height}px
    </div>
  );
};

export default Dimensions;
