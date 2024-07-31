console.log("Hello");

//4. AXIOS Request
function sendReq(){
    axios.post('/submit-form',{
        username : 'Gourav',
        password : 'Gourav@19'
    })
    .then((res)=>{
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err);
    })
}
// axios data is also undefined

sendReq();