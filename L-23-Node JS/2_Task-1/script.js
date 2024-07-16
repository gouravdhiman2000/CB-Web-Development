let arr =[];

for(let i=0; i < 100; i++){
    arr.push(Math.floor(Math.random()*100))
}

console.log(JSON.stringify(arr));