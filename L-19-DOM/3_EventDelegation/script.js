// Item list
let itemList = document.querySelectorAll('.item');
let container = document.querySelector('.container');

console.log(itemList);

// Loop lga kr har ek li pr event lgana pdrga
/*
itemList.forEach((item) => {
    // console.log(item);
    // adding event listener over all the items in the list
    item.addEventListener('click', () =>{
        // this will print the item on which we click
        console.log(item.innerText);
    })
})
*/

// Event Delegation Usage
// event - event object
container.addEventListener('click',(event) => {
    // console.log(event.target);
    let item = event.target;
    console.log(item.innerText);
})