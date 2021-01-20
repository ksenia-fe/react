import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx'

const rootEl = document.querySelector('#root');

const yearsOld = birthDate => {
    const now = new Date().getFullYear();
    return now - birthDate;
    
}

ReactDOM.render(<Greeting firstName='John' lastName='Doe' birthDate={yearsOld(2004)}/>, rootEl);