let movies = document.querySelectorAll('.movie');
console.log(movies);

let body =  document.querySelector('body');

// classList
// 1. add
// 2.remove
// 3. toggle : agar class hai toh remove kr dega, else add kr dega class
// Adding a class to an element using JS

// body.classList.add('theme-1');
console.log(body);

// setTimeout(()=>{
//     // removing class after 3 seconds
//     body.classList.remove('theme-1');
// },3000);


// toggle
setInterval(()=>{
    body.classList.toggle('theme-1');
},2000);