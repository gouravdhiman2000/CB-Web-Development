let cntValue = document.querySelector('.cntValue');
let reduceBtn = document.querySelector('.reduce');
let updateBtn = document.querySelector('.update');

// console.log(cntValue);
// console.log(reduceBtn);
// console.log(updateBtn);

updateBtn.addEventListener('click',()=>{
    // console.log("Update Btn Clicked");
     // parseInt convert string into number
    // console.log(parseInt(cntValue.innerText)+2);
   
    // console.log((+cntValue.innerText)+2);
    // console.log(Number(cntValue.innerText)+2);
    cntValue.innerText = parseInt(cntValue.innerText)+1;
})

reduceBtn.addEventListener('click',()=>{
    // console.log("Reduce Btn Clicked");
    cntValue.innerText = parseInt(cntValue.innerText)-1;
})