// this output is shown the client site i.e- browser console
// console.log("HEllo World");

// accessing the button
const btn = document.querySelector('button');

const input = document.querySelector('input');

btn.addEventListener('click', async(ev)=>{
    //yeh default behaviour ko hone se rokta hai
    // mtlb jo browser pr request jani thi vho nhi jane dega
    
    ev.preventDefault();//browser ka url change nhi hoga - form ko submit nhi hone dega
    // yeh html ke default behaviour ko hone se rok deta hai
    console.log("clicked the button");

    // Yaha se hum AJAX request bhej skte hai..
    // yeh request bhejne ke liye hume XMLHttpRequest ka use karna h
    // yeh hume request bhejne ke liye use karna h
    //performing request using script.js for that make (ev) to async function


    // where script performing the request is know as AJAX Request
    try{
        // destructering syntax{} for data because- input value object data is present in the data
        let {data} = await axios.get(`/getTask?task=${input.value}`)
        // to get the input value - select the input value
        // and then get the value of the input
        // const input = document.querySelector('input');
        
        console.log(data);//now whatever we console - script will get the data 

    }
    catch(err){
        console.log(err);
    }
    
});
