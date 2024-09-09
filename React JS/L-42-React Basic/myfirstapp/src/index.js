import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Helloworld from './components/Helloworld';
import Lucky7 from './components/Lucky7';
import TaskList from './components/TaskList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  
    <App />
    
    <Helloworld/>

    <Lucky7/>

    <TaskList/>



  </React.StrictMode>
);


