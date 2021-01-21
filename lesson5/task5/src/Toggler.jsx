import React from 'react';

class Toggler extends React.Component {
    toggleHandler = (e) => e.target.innerText === 'Off' ? e.target.innerText = 'On' : e.target.innerText = 'Off'
    render(){
        return(
            <div className="toggler"
                onClick={this.toggleHandler}>Off
            </div>
        )
    }
}

export default Toggler