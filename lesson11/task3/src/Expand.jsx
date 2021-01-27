import React from 'react';

class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  contentToggler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.contentToggler} className="expand__toggle-btn">
            {this.state.isOpen === true ? '↑' : '↓'}
          </button>
        </div>
        {this.state.isOpen ? (
          <div className="expand__content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Expand;
