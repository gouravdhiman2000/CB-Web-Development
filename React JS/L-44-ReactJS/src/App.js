import React from "react";
import ReactDOM from 'react-dom/client';
import HelloWorld from "./components/HelloWorld";
import TodoApp from './components/TodoApp/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <HelloWorld/>
    <TodoApp />
    
);