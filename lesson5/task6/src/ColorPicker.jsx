import React from 'react';

const textEl = document.querySelector('picker__button');

class ColorPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    aqua = () => {
        this.setState({
            text: 'Aqua'
        })
    }
    coral = () => {
        this.setState({
            text: 'Coral'
        })
    }
    bisque = () => {
        this.setState({
            text: 'Bisque'
        })
    }

    empty = () => {
        this.setState({
            text: this.state.text = ''
        })
    }

    render(){
        return ( <div>
                <div className="picker__title">
                    {this.state.text}
                </div>
                <div>
                    <button className="picker__button picker__button_coral"
                        onMouseOver={this.coral}
                        onMouseOut={this.empty}
                    ></button>
                    <button className="picker__button picker__button_aqua"
                        onMouseOver={this.aqua}
                        onMouseOut={this.empty}
                    ></button>
                    <button className="picker__button picker__button_bisque"
                        onMouseOver={this.bisque}
                        onMouseOut={this.empty}
                    ></button>
                </div>
            </div>
        )
    }
}

export default ColorPicker;