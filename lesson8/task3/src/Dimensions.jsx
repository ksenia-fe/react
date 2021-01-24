import React from 'react';

// class Dimensions extends React.Component {
//     constructor(props) {
//         super(props);

//         const {innerWidth, innerHeight} = window;
//         this.state = {
//             width: innerWidth,
//             heigth: innerHeight
//         }
//         document.title = `${this.state.width}px x ${this.state.heigth}px`;
//     }

//     onResize = event => {
//         const {innerWidth, innerHeight} = event.target;

//         this.setState({
//             width: innerWidth,
//             heigth: innerHeight
//         })
//         document.title = `${this.state.width}px - ${this.state.heigth}px`;
//     }

//     componentDidMount() {
//         window.addEventListener('resize', this.onResize)
//     }

//     componentWillUnmount() {
//         window.removeEventListener('resize', this.onResize)
//     }

//     render() {
//         return (
//             <div>
//                 {`${this.state.width}px - ${this.state.heigth}px`}
//             </div>
//         )
//     }
// }

class Dimensions extends React.Component {
    state = {
        width: null,
        height: null
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        const {innerWidth, innerHeight} = window;
        this.setDimension(innerWidth, innerHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    onResize = event => {
        const {innerWidth, innerHeight} = event.target;
        this.setDimension(innerWidth, innerHeight);
    }

    setDimension = (width, height) => {
        this.setState({
            width,
            height
        })
        document.title = `${this.state.width} x ${this.state.height}`;
    }

    render() {
        return <div className="dimensions">
                    {`${this.state.width}px - ${this.state.height}px`}
                </div>
    }
}


export default Dimensions;