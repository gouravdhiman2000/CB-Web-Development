let btn = document.querySelector('button');
let list = document.querySelector('.list');


function getData(url){
    return new Promise((resolve,reject) => {
        fetch(url)
            .then(res=>{
                return res.json()
            }).then(data=>{
               resolve(data);
            })
            .catch(err=>reject(err));
    })
}

btn.addEventListener('click', () =>{
    getData ('https://cat-fact.herokuapp.com/facts')
        .then((data) => {
            console.log(data);

            list.innerText = "";

            data.forEach((d)=>{
                
                console.log(g.text);

                let li = document.createElement('li');
                li.innerText = d.text;
                list.appendChild(li);

            }).catch((err)=>{
                console.log(err);
            })
        })
})      