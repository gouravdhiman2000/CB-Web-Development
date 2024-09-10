import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './components/Counter/Counter';
import TodoApp from './components/TodoApp/TodoApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp/>
    
  </React.StrictMode>
);


