import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      // arrow: '↓',
    };
  }

  func = () => {
    this.setState({
      isOpen: true,
    });
  };

  func2 = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const arrow = this.state.isOpen === true ? '↑' : '↓';
    return (
      <div className="app">
        <Expand
          arrow={arrow}
          isOpen={this.state.isOpen}
          func={this.func}
          func2={this.func2}
          title={'this is title'}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
