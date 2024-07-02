function maggieLaao(callBack){
    console.log("Maggi lene chale gaye");
    setTimeout(function(){
        console.log("Maggi lekar aa gaye");
        callBack(maggieKhaao);
        // callBack= maggieBanao() then after maggieBanao pass the maggiekhao as an argument in the callBack function
    },2000);
}

function maggieBanao(callBack){
    console.log("Maggi banana start");
    setTimeout(function(){
        console.log("Maggi ban gayi");
        callBack();//calling the maggieKhaao function
    },2000);
}


function maggieKhaao(){
    console.log("Maggi khana start");
    setTimeout(function(){
        console.log("Maggi khana samapt");
    },2000);
}

maggieLaao(maggieBanao);
// maggieBanao();
// maggieKhaao();
