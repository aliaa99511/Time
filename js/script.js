


var head=document.getElementById("head");

setInterval(function(){

    head.innerHTML = new Date().toLocaleTimeString();

},1000)