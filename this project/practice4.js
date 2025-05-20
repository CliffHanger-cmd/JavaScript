// Closures
function counter(){
    var count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

var fnc = counter();
fnc();


function timer(){
    var a = 12;
    return setTimeout(function(){
        console.log(a);
    },2000)
}

var ans = timer();


