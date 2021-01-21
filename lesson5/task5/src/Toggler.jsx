import React from 'react';

class Toggler extends React.Component {
    toggleHandler = (e) => e.target.textContent === 'Off' ? e.target.textContent = 'On' : e.target.textContent = 'Off'
    render(){
        return(
            <div className="toggler"
            onClick={this.toggleHandler}>Off</div>
        )
    }
}

export default Toggler