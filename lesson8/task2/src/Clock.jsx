import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithoffset = (offset) => {
  const offsetHours = new Date().getTimezoneOffset() / 60;
  return new Date(
    new Date().setHours(new Date().getHours() + offset + offsetHours)
  );
};

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState({
    location,
    date: offset,
  });
  const { date } = time;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime({
        date,
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">
        {moment(getTimeWithoffset(date)).format('LTS')}
      </div>
    </div>
  );
};

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       location: props.location,
//       date: props.offset,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         date: this.state.date,
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.props.location}</div>
//         <div className="clock__time">
//           {moment(getTimeWithoffset(this.state.date)).format('LTS')}
//         </div>
//       </div>
//     );
//   }
// }

export default Clock;
