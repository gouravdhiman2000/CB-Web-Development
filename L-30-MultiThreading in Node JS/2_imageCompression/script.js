console.log('hello');
let inp = document.getElementById('inp');
let img = document.getElementById('img');

inp.onchange = function(e){
    console.log(e);
    console.log(e.target.files[0], 'non-compressed file');

    let file = e.target.files[0];

    const options = { 
        maxSizeMB: 1,            // (default: Number.POSITIVE_INFINITY)
        
      }
      
      //return a promise
      imageCompression(file, options)
      .then(res => {
        console.log(res,'compressed file');
        
      })
}

// you should provide one of maxSizeMB, maxWidthOrHeight in the options
