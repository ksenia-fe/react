import React from 'react';
import Clock from './Clock.jsx';

class App extends React.Component {
    state = {
        visible: true,
    }
  
    onToggle = () => {
        this.setState({
            visible: !this.state.visible,
        })
    }
    render() {
        return (
            <>
            <button onClick={this.onToggle}>Toggle</button>
            <div>{this.state.visible && 
                <div className="clocks">
                <Clock location={'London'} offset={2}/>
                <Clock location={'Kyiv'} offset={0}/>
                <Clock location={'New York'} offset={-5}/>
                </div>}
            </div>
            </>
        )
    }
}

export default App;
