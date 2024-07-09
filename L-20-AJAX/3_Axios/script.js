let btn = document.querySelector('button');
let list = document.querySelector('.list');


btn.addEventListener('click', () => {

    // AXIOS
    axios('https://cat-fact.herokuapp.com/facts')
        // this part handle by axios itself
        // .then(res => {
        //     return res.json()
        // })
        .then(res => {
            let  data = res.data;
            console.log(data);
            list.innerText = '';
            data.forEach((d) => {
                // console.log(d.text)
                let li = document.createElement('li');
                li.innerText = d.text;
                list.appendChild(li);
            })
        })
        .catch(err => console.log(err));
})