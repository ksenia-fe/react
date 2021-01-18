import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';

const rootEl = document.querySelector('#root');

const element = (
  <>
    <h1 class="title">Todo List</h1>
    <main class="todo-list">
      <div class="actions">
        <input class="task-input" type="text"></input>
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
    </main>
  </>
);

ReactDOM.render(element, rootEl);
