import React from 'react';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'online',
        }
    }

    componentDidMount() {
        window.addEventListener('offline', this.onOffline)
        window.addEventListener('online', this.onOnline)
    }

    componentWillUnmount() {
        window.removeEventListener('offline', this.onOffline)
        window.removeEventListener('online', this.onOnline)
    }

    onOffline = () => {
        this.setState({
            status: 'offline',
        });
        const el = document.querySelector('.status');
        el.classList.add("status_offline");
    }
    
    onOnline = () => {
        this.setState({
            status: 'online',
        })
    }

    render(){
        return (
            <div className="status">{this.state.status}</div>
        )
    }
}

export default Status;