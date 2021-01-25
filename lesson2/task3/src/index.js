import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const render = (time) => {
  const rootEl = document.querySelector('#root');

  const seconds = new Date(time).getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 === 0 ? '#000' : '#fff';

  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(element, rootEl);
};

render(new Date());

setInterval(() => render(new Date()), 1000);
