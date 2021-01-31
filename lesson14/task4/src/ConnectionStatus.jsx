import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const onOffline = () => {
      setStatus('offline');
    };

    const onOnline = () => {
      setStatus('online');
    };

    window.addEventListener('offline', onOffline);
    window.addEventListener('online', onOnline);

    return () => {
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('online', onOnline);
    };
  }, []);

  return status === 'online' ? (
    <div className="status">{status}</div>
  ) : (
    <div className="status status_offline">{status}</div>
  );
};

// class ConnectionStatus extends React.Component {
//   state = {
//     status: 'online',
//   };

//   componentDidMount() {
//     window.addEventListener('offline', this.onOffline);
//     window.addEventListener('online', this.onOnline);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('offline', this.onOffline);
//     window.removeEventListener('online', this.onOnline);
//   }

//   onOffline = () => {
//     this.setState({
//       status: 'offline',
//     });
//   };

//   onOnline = () => {
//     this.setState({
//       status: 'online',
//     });
//   };

//   render() {
//     return this.state.status === 'online' ? (
//       <div className="status">{this.state.status}</div>
//     ) : (
//       <div className="status status_offline">{this.state.status}</div>
//     );
//   }
// }

export default ConnectionStatus;
