let body = document.querySelector('body');
let navBar = document.querySelector('.navBar');

// body.addEventListener('scroll',(event)=>{
//     console.log(event);
// })

/*
window.onscroll = (ev) => {
    // console.log(ev);
   
   
    
    // if(window.scrollY < 300){
    //     console.log("On Page 5");
    // }
    // else{
    //     console.log("On Page <5");
    // }
    console.log("Scroll");
    if(window.scrollY > 300){
        navBar.style.backgroundColor="orange";
    }
    else{
        navBar.style.backgroundColor="white";
    }
}
*/

// window.onscrollend = (ev) => {
//     console.log("Scrolling End!")
// }


// Debouncing
// window.addEventListener('scroll',function(){})
// here we call the debounce function and it should return some function that can be replace it when scroll event occurs

function scrollKaFunction(){
    console.log("Scrolling");
}

// window.addEventListener('scroll' , debounce(function() {
//     // console.log("Scroll");
    
// },1000));

window.addEventListener('scroll', debounce(scrollKaFunction, 1000));

// calling debounce function on winddow.addEventListener and its acts as callBack function

function debounce(fun,delay){
    
    let id;

    return function(){
        // console.log("Scrolling");
        console.log("Clearing Interval :", id);
        clearTimeout(id);
        id = setTimeout(() =>{
            fun();
        },delay);
        console.log("New Interval Id :", id);
    }
}