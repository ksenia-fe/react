import React from 'react';

class ConectionStatus extends React.Component {
  constructor(props) {
    this.state = {
      status: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('offline', this.handlerOfflineStatus);
    window.addEventListener('online', this.handlerOnlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.handlerOfflineStatus);
    window.removeEventListener('online', this.handlerOnlineStatus);
  }

  handlerOfflineStatus = () => {
    this.setState({
      status: 'offline',
    });
  };

  handlerOnlineStatus = () => {
    this.setState({
      status: 'online',
    });
  };

  render() {
    const { status } = this.state;
    const className = `status ${status === 'offline' ? 'status_offline' : ''}`;

    return <div className={className}>{status}</div>;
  }
}

export default ConectionStatus;
