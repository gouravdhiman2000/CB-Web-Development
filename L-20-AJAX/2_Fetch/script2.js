let btn = document.querySelector('button');
let list = document.querySelector('.list');


btn.addEventListener('click', () => {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then(res => {
            return res.json()
        }).then(data => {
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