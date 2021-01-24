import React from 'react';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'online',
        }
    }

    onOnline = () => {
        this.setState({
            status: 'offline',
        })
    }

    componentDidMount() {
        window.addEventListener('offline', this.onOnline)
    }

    componentWillUnmount() {
        window.removeEventListener('offline', this.onOnline)
    }

    render(){
        return (
            <div className="status">{this.state.status}</div>
        )
    }
}

export default Status;