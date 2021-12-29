let text=document.getElementById("textt");
let mes=document.getElementById("message");
mes.style.visibility="hidden";

text.innerHTML=10;
setTimeout(function(){
    text.innerHTML=9;
    setTimeout(function(){
        text.innerHTML=8;
setTimeout(function(){
    text.innerHTML=7;
    setTimeout(function(){
        text.innerHTML=6;
setTimeout(function(){
    text.innerHTML=5;
    setTimeout(function(){
        text.innerHTML=4;
setTimeout(function(){
    text.innerHTML=3;
    setTimeout(function(){
        text.innerHTML=2;
setTimeout(function(){
    text.innerHTML=1;
    setTimeout(function(){
        mes.style.visibility="visible";
        text.style.visibility="hidden";
    },1000)
    
        
    },1000)
},1000)
        
    },1000)
},1000)
        
    },1000)
},1000)
        
    },1000)
},1000)


},1000)
