import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
    };
  }

  setColorText = (color) => {
    this.setState({
      title: color,
    });
  };

  setTitle = (title) => {
    this.setState({
      title,
    });
  };
  clearTitle = () => this.setTitle(null);

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setColorText('Coral')}
            onMouseOut={this.clearTitle}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setColorText('Aqua')}
            onMouseOut={this.clearTitle}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setColorText('Bisque')}
            onMouseOut={this.clearTitle}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
