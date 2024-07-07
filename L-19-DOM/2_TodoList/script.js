
let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let taskList = document.querySelector('.taskList');

let upBtn = document.querySelector('.upBtn');
let downBtn = document.querySelector('.downBtn');
let delBtn = document.querySelector('.delbtn');

btn.addEventListener('click',() => {
    // add tasks to input field
    let taskName = inp.value;
    console.log(taskName);

    // apending the tasks in the tasklist
    let li = document.createElement('li');
    // li.innerText = taskName;

    // add task in the taskList
    li.innerHTML =  `<spanclass="taskText">${taskName}</span>
            <button class="upBtn">⬆️</button>
            <button class="downBtn">⬇️</button>
            <button class="delBtn">❌</button>`;

    li.classList.add('taskItem');
    taskList.appendChild(li);

    // make input empty after entering the task
    inp.value ="";
});




/*
taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains('upbtn')){
        const taskItem = event.target.parentElement;
        const previousTask = task.previousElementSibling;
        if(previousTask){
            taskList.insertBefore(taskItem, previousTask);
        }
        else if (event.target.classList.contains('downbtn')){
            const taskItem = event.target.parentElement;
            const nextTask = task.nextElementSibling;
            if(nextTask){
                taskList.insertBefore(nextTask, taskItem);
            }
        }
    }
});
*/


// Adding event listener to parent
taskList.addEventListener('click',(event)=>{
    console.log(event.target);

    // Identifyimg using classList
    let item = event.target;
    if(item.classList.contains('upBtn')){
        console.log("Up Button daba diya!")
        // to find parentElement
        let parentElement = item.parentElement;
        // to find parentElement previou sibling
        let previousSibling = parentElement.previousElementSibling;

        // swapping is done insertBefore Function
        // insertBefore apply to parentDiv
        // insertBefore(newNode, refernceNode)
        taskList.insertBefore(parentElement,previousSibling);

        // console.log(parentElement);
        // console.log(previousSibling);
    }
    else if(item.classList.contains('downBtn')){
        console.log("Down Button daba diya!")
        // down button dabane pr parent ka  next element chahiye
        let parentElement = item.parentElement;
    
        let nextSibling = parentElement.nextElementSibling;

        // swapping
        taskList.insertBefore(nextSibling,parentElement)


        // console.log(parentElement);
        // console.log(nextSibling);
    
         
    }
    else if(item.classList.contains('delBtn')){
        console.log("Delete Button daba diya!");

        // pressing delete btn delete the parentElement itself is done by 
        // .remove function
        let parentElement = item.parentElement;
        parentElement.remove();
    }

    
});