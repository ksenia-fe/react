import React from 'react';

class Expand extends React.Component {
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.props.toggler} className="expand__toggle-btn">
            {this.props.arrow}
          </button>
        </div>
        {this.props.isOpen ? (
          <div className="expand__content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Expand;
