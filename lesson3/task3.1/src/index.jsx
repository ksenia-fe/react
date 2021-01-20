import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx'
import './styles.scss';

const rootEl = document.querySelector('#root');

const userInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatars.githubusercontent.com/u10001'
}
ReactDOM.render(
    <Comment 
        author={userInfo}
        text = 'Good job!'
        date = {new Date()}
    />, rootEl);