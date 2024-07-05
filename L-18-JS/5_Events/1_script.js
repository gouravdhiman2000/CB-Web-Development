let para = document.querySelector('.para');
let btn = document.querySelector('button');
console.log(btn);
console.log(para);

btn.onclick = () =>{
    console.log("Clicked");
}


btn.onclick = () =>{
    console.log("Clicked Button");
}
para.ondblclick = () => {
    console.log("Div doubled Clicked");
}


// 1. First way
// para.onmouseenter = () => {
//     para.classList.add('mouse-enter');
// }

// para.onmouseleave = () => {
//     para.classList.remove('mouse-enter');
// }