let body = document.querySelector('body');
let btn = document.querySelector('.btn');

function clickHandler(){
    console.log("Clicked");
}

// Throttling
// yeh function run hoga sirf 1 baar in 5 seconds
btn.addEventListener('click', throttling(clickHandler, 5000));

function throttling(fun,delay){
    
    let initialTime = 0;

    return function(){
        // let newTime = ;

        if(new Date().getTime() - initialTime >= delay){
            initialTime = new Date().getTime();
            fun();
        }
        else{
            console.log("Abhi Nahi krne dunga");
        }
    }
}