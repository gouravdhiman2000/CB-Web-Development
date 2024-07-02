function downloadMovie(url,callBack){
        let ext = url.split('/').pop().split('.').pop();
        // extension can be text file
        if(ext != 'mp4'){
           throw new Error("Abey Link toh Sahi dede!");
        }
        else{
            setTimeout(function(){
                callBack(url.split('/').pop());
                // string mei se movie name show hoga
            },3000);
        }
}

downloadMovie('myurl.com/avengers.mp4',function(movie){
    console.log(movie);
})