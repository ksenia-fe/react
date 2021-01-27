import React from 'react';

const Expand = ({ isOpen, children, title, func, func2, arrow }) => {
  if (!isOpen) {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={func} className="expand__toggle-btn">
            <i className="fas fa-chevron-up">{arrow}</i>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={func2} className="expand__toggle-btn">
            <i className="fas fa-chevron-up">{arrow}</i>
          </button>
        </div>
        <div className="expand__content">{children}</div>
      </div>
    );
  }
};

export default Expand;
