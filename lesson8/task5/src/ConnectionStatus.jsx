import React from 'react';

class ConectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('online', this.onOnline);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.onOffline);
    window.removeEventListener('online', this.onOnline);
  }

  onOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  onOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  render() {
    return this.state.status === 'online' ? (
      <div className="status">{this.state.status}</div>
    ) : (
      <div className="status status_offline">{this.state.status}</div>
    );
  }
}

export default ConectionStatus;
