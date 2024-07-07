
const btn = document.querySelector('button');
let list = document.querySelector('.list');

// 1. Create the XML  Http Request Object
let xml = new XMLHttpRequest();

//2. Setup karna request ko
let url = 'https://cat-fact.herokuapp.com/facts';
xml.open('GET', url);


// 3. Success hone par request ka kya karna hai?

xml.onload = (res) => {
    // console.log(respone);

    // success hone pr yha jana hai
    // console.log(res.target.response);
    // after this the text we get is an JSON


    // convert  the JSON String into JavaScript Object - JSON.parse is used
    let data = JSON.parse(res.target.response);
    // it prints the JSON String
    // console.log(data);
    
    // whole data is presented at text field in JS object
    data.forEach((d)=>{
        console.log(d.text);

        //show the fetched data to the html Page
        let li = document.createElement('li');
        li.innerText = d.text;
        list.appendChild(li);

    })
}


// 4. Failure hone par request ka kya karna hai?

xml.onerror = (err) => {
    console.log(err);
}


btn.addEventListener('click', () => {
    // console.log("Clicked");
    
    xml.send();// send the request to the url we have to do this
    
    //show the fetched data to the html Page
    // fetch the url
    // fetch(url)
    // .then((res)=>{
    //     return res.json();
    // })
    // .then((res)=>{
    //     console.log(res);


    //     res.forEach((d)=>{
            
    //     })
    // })

});
