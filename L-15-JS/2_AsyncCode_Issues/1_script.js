/*
setTimeout(function(){
    console.log("Mummy Maggie Banado");
},2000);


setTimeout(function(){
    console.log("khub bana le, mere liye bhi bana dena chai ke sath");
},2000);


setTimeout(function(){
    console.log("hatash hokar yuvak ne khud hi maggie nani");
},2000);


setTimeout(function(){
    console.log("bartn bhi dho kar rakhna");
},2000);
*/

function mummyMaggieBanado(callBack){
    
    setTimeout(function(){
        console.log("Mummy Maggie Banado");
        callBack();//this is a callBack function of mummyMaggieBanado
    },2000);
}

function jaaMarketSeMAaggieLaa(){
    setTimeout(function(){
        console.log("Jaakar market se Maggie lekar aa");
    },2000);
}

function maggieBananaStart(){
    setTimeout(function(){
        console.log("Jmaggie banana start");
    },2000);
}



mummyMaggieBanado(jaaMarketSeMAaggieLaa);