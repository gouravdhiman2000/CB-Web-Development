import React from 'react'

const tasks = ['Cricket', 'Dance','Sing', 'Volleyball', 'Basketball','Coding','football']

const TaskList = () => {
  return (
    <div>
        <h2>Task List</h2>
        {tasks.map((t,indx)=>{
            return <div key={indx}>{t}</div>
        })}
    </div>
  )
}

export default TaskList