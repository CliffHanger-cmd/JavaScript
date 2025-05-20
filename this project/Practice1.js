// global Window
console.log(this)

// function - window 
function abcd(){
    console.log(this)
}
abcd();

const child = () => {
    console.log(this)
}
child()

// method - object
var obj = {
    name: function(){
        console.log(this)
    },
    age: 25,
    email:" abc@abc.abc",

    child : () => {
        console.log(this)
    }
    
}

obj.name();
obj.child();

// fnc inside method (es5) - window
var obj2 = {
    name: function(){
        console.log(this)
        function childfunc(){
            console.log(this)
        }
        childfunc()
    },
    age: 25,
    email:" abc@abc.abc",

}

obj2.name();


// fnc inside method (es6) - object

var obj3 = {
    name: function(){
        const child = () => {
            console.log(this)
        }
        child()
    }
}

obj3.name();

// constructor fnc mein this ki value - new blank object
function add(){
    console.log(this)
}

const ans = new add()


// event listener mein  this ki value - that element jispar event lis. laga ho 
document.querySelector("button")
.addEventListener("click", function(){
        console.log(this);
})

