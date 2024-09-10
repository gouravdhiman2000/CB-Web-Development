import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList';
import TodoInput from '../TodoInput/TodoInput';

const TodoApp = () => {
    let initialtasks = ['Cricket','Dance','sing'];

    const [tasks, setTasks] = useState(initialtasks);

    function addTask(newTask){
      setTasks([ newTask, ...tasks]);
    }


    function decreasePriority(taskName){
      let newTask = [...tasks];
      let index = newTask.indexOf(taskName);
      if(index < newTask.length-1){
        let temp = newTask[index];
        newTask[index] = newTask[index+1];
        newTask[index+1] = temp;
        setTasks(newTask);
      }
      // newTask.splice(index, 1);
      // setTasks(newTask);
      console.log("You are reducing the priority of", taskName);
    }

    function increasePriority(taskName){
      let newTask = [...tasks];
      let index = newTask.indexOf(taskName);
      if(index > 0){
        let temp = newTask[index];
        newTask[index] = newTask[index-1];
        newTask[index-1] = temp;
        setTasks(newTask);
      }
      console.log("You are increasing the priority of", taskName);
    }


    function deleteTask(taskName){
      let newTask = tasks.filter(t=>t!==taskName);
      setTasks(newTask);

      console.log("You are deleting:", taskName);
    }


  return (
    <div>
        <h2>TodoApp</h2>
        <TodoInput addTask={addTask} />
        {/* <input type='text' placeholder='Enter Task Name'/>
        <button onClick={taskHandler}>Add Task</button> */}

        {/* <ul>
            {tasks.map((task,indx)=> <li key={indx}>{task}</li>)}
        </ul> */}

        {/* TodoList({tasks}); */}
        <TodoList
        tasks={tasks} 
        decreasePriority={decreasePriority}
        increasePriority={increasePriority}
        deleteTask={deleteTask}
        />
    </div>
  )
}

export default TodoApp