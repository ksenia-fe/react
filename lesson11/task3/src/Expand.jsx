import React from 'react';

class Expand extends React.PureComponent {
render(){
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
}
};

export default Expand;
