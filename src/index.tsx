import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const initialState: { id: string | number; title: string; isDone: boolean; }[] = [];

ReactDOM.render(
  <React.StrictMode>
    <App  todos={initialState}/>
  </React.StrictMode>,
  document.getElementById('root')
);

