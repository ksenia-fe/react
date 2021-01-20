import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx'
import './styles.scss';

const rootEl = document.querySelector('#root');

const userInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatars.githubusercontent.com'
}
ReactDOM.render(
    <Comment 
        user={userInfo}
        text = 'Good job!'
        date = {new Date()}
    />, rootEl);