import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ id, done, text, onChange, onDelete }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        defaultChecked={done}
        className="list-item__checkbox"
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  done: PropTypes.bool,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  text: '',
  done: null,
};

export default Task;
