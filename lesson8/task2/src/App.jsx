import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      <div>
        {visible && (
          <>
            <Clock location={'London'} offset={2} />
            <Clock location={'Kyiv'} offset={0} />
            <Clock location={'New York'} offset={-5} />
          </>
        )}
      </div>
    </>
  );
};
// class App extends React.Component {
//   state = {
//     visible: true,
//   };

//   onToggle = () => {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   };
//   render() {
//     return (
//       <>
//         <button onClick={this.onToggle}>Toggle</button>
//         <div>
//           {this.state.visible && (
//             <>
//               <Clock location={'London'} offset={2} />
//               <Clock location={'Kyiv'} offset={0} />
//               <Clock location={'New York'} offset={-5} />
//             </>
//           )}
//         </div>
//       </>
//     );
//   }
// }

export default App;
