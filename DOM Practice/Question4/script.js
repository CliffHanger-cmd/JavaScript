// Create an ordered List. Allow users to add and remove list items dynamically using buttons

var add = document.querySelector("#add")
var remove = document.querySelector("#Delete")
var inp = document.querySelector('input')

var ul = document.querySelector('ul')

var li;

add.addEventListener("click", function(){
    if(inp.value.trim() === ''){}
    else{
        li = document.createElement('li')
        li.textContent = inp.value;
        console.log(li)
        ul.appendChild(li)
        inp.value = ""

    }
})
remove.addEventListener("click", function(){
    ul.removeChild(li)
})