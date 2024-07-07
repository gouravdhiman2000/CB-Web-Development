
const btn = document.querySelector('button');
let list = document.querySelector('.list');

// send request is closed once it run to prevent this we need to do this
// First - get the data
// second - make it a promise

function getData(url){
    return new Promise((resolve, reject)=>{

        // 1. Create the XML  Http Request Object

        let xml = new XMLHttpRequest();

        //2. Setup karna request ko

        // let url = 'https://cat-fact.herokuapp.com/facts';
        // URL is passed to the function
        xml.open('GET', url);

        // 3. Success hone par request ka kya karna hai?

        xml.onload = (res)=>{
            let data = JSON.parse(res.target.response);

            // agar success hai toh resolve call krdo data ke sath
            resolve(data); 
        }

        // 4. Failure hone par request ka kya karna hai?
        // error aane par reject lo bhi call kr do
        xml.onerror = (err) => {
            reject(err);
        }
        xml.send(); //request bhej do
    })
}


btn.addEventListener('click', () => {
    // console.log("Clicked");
    
    // xml.send();

    getData ('https://cat-fact.herokuapp.com/facts')
        .then((data)=>{

            console.log(data);

            // when clicking on the button we don't want ki data niche add ho to prevent this we have to do this

            list.innerText="";

            // whole data is presented at text field in JS object
            
            //show the fetched data to the html Page
            data.forEach((d)=>{
            console.log(d.text);

            let li = document.createElement('li');
            li.innerText = d.text;
            list.appendChild(li);

            })

        }).catch((err)=>{
                console.log(err);
        })

});
