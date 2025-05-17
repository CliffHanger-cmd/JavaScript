// Build a character counter for at text area or input field, which updates in real time aser types and enforce a chracter

var txtarea = document.querySelector("textarea")

var counter = document.querySelector("#counter")

txtarea.addEventListener("input", function(){
    counter.textContent = txtarea.value.length
}
)

// #show a progress bar which shows how much page is scrolled