// yeh function promiswe kar raha hai movie download krke dega
// it has two conditions -
// Fulfill - movie download go gai
// Rejected - Movie due to x-y-z reason download nahi ho pai

function downloadMovie(url){
    return new Promise(function(resolve,reject){
        let ext = url.split('/').pop().split('.').pop();
        // extension can be text file
        if(ext != 'mp4'){
            reject("Abey Sahi URL dede!");
        }
        else{
            setTimeout(function(){
                resolve(url.split('/').pop());
                // string mei se movie name show hoga
            },3000);
        }
    })
}

// downloadMovie function ek promise return krta hai, or downloadMovie is Promise
downloadMovie('myurl.com/avengers.mp4')
.then(function(movie){
    console.log(movie);
}).catch(function(err){
    console.log(err);
})