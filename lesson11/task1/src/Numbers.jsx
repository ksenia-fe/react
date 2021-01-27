import React from 'react';
import PropTypes from 'prop-types';

class Numbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      this.props.number === nextProps.number &&
      this.props.title === nextProps.title
    ) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

Numbers.PropTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};

Numbers.defaultProps = {
  title: 'some number',
};

export default Numbers;
