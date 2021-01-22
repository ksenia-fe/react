import React from 'react';
import Greeting from './Greeting.jsx'
import Login from './Login.jsx'
import Logout from './Logout.jsx'

class Auth extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    onLogin = () => {
        this.setState({
           isLoggedIn: true 
        })
    }

    onLogout = () => {
        this.setState({
           isLoggedIn: false 
        })
    }

    render(){
        const button = this.state.isLoggedIn 
            ? <div onClick={this.onLogout}><Logout/></div>
            : <div onClick={this.onLogin}><Login/></div>

        return(
            <div className='panel'>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        )
    }
}

export default Auth