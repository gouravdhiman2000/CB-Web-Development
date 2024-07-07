let body = document.querySelector('body');
let navBar = document.querySelector('.navBar');

// body.addEventListener('scroll',(event)=>{
//     console.log(event);
// })

window.onscroll = (ev) => {
    // console.log(ev);
    // console.log(window.scrollY);
    
    // if(window.scrollY < 300){
    //     console.log("On Page 5");
    // }
    // else{
    //     console.log("On Page <5");
    // }

    if(window.scrollY > 300){
        navBar.style.backgroundColor="orange";
    }
    else{
        navBar.style.backgroundColor="white";
    }
}

// window.onscrollend = (ev) => {
//     console.log("Scrolling End!")
// }