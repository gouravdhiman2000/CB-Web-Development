let movies = document.querySelectorAll('.movie');
console.log(movies);
// iterating over movies
// movies.forEach((item) => {
//     console.log(item);
//     item.style.color ="red";
//     item.style.fontSize = "40px";
//     item.style.backgroundColor =" black";
//     item.style.listStyle = "none"
// })



let body = document.querySelector('body');

let x = 1;

setInterval(()=>{
    // Not gate
    x = 1 - x;
    if(x){
        body.style.backgroundColor ="white";
        body.style.color ="blue";
    }
    else{
        body.style.backgroundColor ="white";
        body.style.color ="black";
    }
},1000);


// Set Interval ka usage

// let id = setInterval(()=>{
//     console.log("Hello");
// },1000);

// setTimeout(()=>{
//     clearInterval(id);
// },5000);