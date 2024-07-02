// let's create a function to add 1 second of delay..
// endtTime - startTime >= 1sec

function delayOneSec(){
        let currentTime = new Date().getTime();

        while(new Date().getTime() - currentTime < 1000){

    }   
}
//delayOneSec();

// for n sec delay
function delayNSec(n){
    for(let i = 0 ; i < n ; i++){
        // calling delayOneSec function for n times of sec
        delayOneSec();
    }
}
//5 sec delay
delayNSec(5);
console.log("Hello World!");