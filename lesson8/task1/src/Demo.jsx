import React from 'react';
import Life from './Life.jsx';

class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: Math.round(Math.random() * 100)
        }
        console.log('consctructor: good place to create state');
    }

    show = () => {
        this.setState({
            visible: true
        });
    }
    hide = () => {
        this.setState({
            visible: false
        });
    }
    update = () => {
        this.setState({
            number: Math.round(Math.random() * 100)
        });
    }

    render() {
        return (
            <div>
                <div>
                    <button className="btn" onClick={this.show}>
                        Show
                    </button>
                    <button className="btn" onClick={this.hide}>
                        Hide
                    </button>
                    <button className="btn" onClick={this.update}>
                        Update
                    </button>
                    {this.state.visible && <Life number={this.state.number}/>}
                </div>
            </div>
        )
    }
}

export default Demo;