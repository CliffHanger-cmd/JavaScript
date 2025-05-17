// Build a coundown timer that start when a button is clicked and update the dispaly in real-time

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var h4 = document.querySelector("h3")


var int ;

btn1.addEventListener("click", function(){
    var count = 0;
    int = setInterval(function(){
        h4.textContent = count;
        count++;
    },1000)
})

btn2.addEventListener("click", function(){
    clearInterval(int);
})

