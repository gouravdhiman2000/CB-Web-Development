// console.log("Hello");

//4. AXIOS Request
// function sendReq(){
//     axios.post('/submit-form',{
//         username : 'Gourav',
//         password : 'Gourav@19'
//     })
//     .then((res)=>{
//         console.log(res.data);
//     })
//     .catch(err=>{
//         console.log(err);
//     })
// }
// // axios data is also undefined

// sendReq();

// 6. Printif todos array on client console -i.e.  browser console
// axios.get('/todos')
//     .then(({data})=>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err);
//     })


// 7. AJAX reques to show data in the browser screen
let form = document.querySelector('form');
let input = document.querySelector('input');

// 8. fetch the taskList from the index.html
let taskList = document.querySelector('.taskList');

//10. function to load initial todoslist
async function loadInitialTasks(){
    let {data} = await axios.get('/todos');
    addToList(data);
}
loadInitialTasks();


// 8.1 - make a function that will add the response data on the browser screen or in the index.html

function addToList(tasks){
    taskList.innerText = "";
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.classList.add('taskItem');
        li.innerHTML = `<div class="taskContent">${task}</div>
            <div class="btnGroups">
                <button class="upBtn">⬆️</button> <button class="downBtn">⬇️</button> <button class="deleteBtn">❌</button>
            </div>`;
        taskList.appendChild(li);
    });
    //8.3- empty the input value when task is added to the list
    input.value = "";
}

//9.
taskList.addEventListener('click',async (ev)=>{
    let item = ev.target;
    try{
        if(item.classList.contains('upBtn')){
            let taskName = item.parentElement.previousElementSibling.innerText;
    
            let {data} = await axios.get(`/increase?name=${taskName}`);

            addToList(data);
    
        }
        else if(item.classList.contains('downBtn')){
            let taskName = item.parentElement.previousElementSibling.innerText;
    
            let {data} = await axios.get(`/decrease?name=${taskName}`);

            addToList(data);
        }
        else if(item.classList.contains('deleteBtn')){
            let taskName = item.parentElement.previousElementSibling.innerText;
    
            let {data} = await axios.get(`/deletetask?name=${taskName}`);

            addToList(data);
        }
    }
    catch(err){
        console.log(err);
    }
});


form.addEventListener('submit',async (ev)=>{
    // form to submit hone se rok lenga
    ev.preventDefault();
    // output shown in the browser console
    console.log(input.value);

    // 7.1 - try-catch ke liye async await use hota hai
    // so make the function (ev) async
    let newTask = input.value;
    try{
        let {data} = await axios.post('/todos',{newTask});
        console.log(data);
        // 8.2- calling the addToList function
        addToList(data);
    }
    catch(err){
        console.log(err);
    }
});
