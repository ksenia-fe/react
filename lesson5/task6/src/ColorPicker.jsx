import React from 'react';

const textEl = document.querySelector('picker__button');

class ColorPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    setColorText = color => {
        this.setState({
            text: color
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
                        onMouseOver={() => this.setColorText('Coral')}
                        onMouseOut={this.empty}
                    ></button>
                    <button className="picker__button picker__button_aqua"
                        onMouseOver={() => this.setColorText('Aqua')}
                        onMouseOut={this.empty}
                    ></button>
                    <button className="picker__button picker__button_bisque"
                        onMouseOver={() => this.setColorText('Bisque')}
                        onMouseOut={this.empty}
                    ></button>
                </div>
            </div>
        )
    }
}

export default ColorPicker;