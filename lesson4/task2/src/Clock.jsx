import React from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const meAndUtcDifference = new Date().getTimezoneOffset() / 60;
  const res = new Date(
    new Date().setHours(new Date().getHours() + meAndUtcDifference + offset)
  );

  return res;
};

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: this.props.offset,
    };

    setInterval(() => {
      this.setState({
        offset: this.props.offset + 1,
      });
    }, 1000);
  }

  render() {
    const time = getTimeWithOffset(this.state.offset);

    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{`${moment(time).format(
          'h:mm:ss A'
        )}`}</div>
      </div>
    );
  }
}

export default Clock;
