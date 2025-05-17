// Create a form with input fields and a submit button. Use JavaScript to Validate the form and display an error message if the input is invalid

var form = document.querySelector("form")
// var inp1 = document.querySelector('#input1')
// var inp2 = document.querySelector('#input2')
var inp = document.querySelectorAll('input[type="text"]')
var h4 = document.querySelector("h4")

form.addEventListener("submit",function(e){
    e.preventDefault();

    for(var i = 0; i < inp.length; i++){
        if(inp[i].value.trim() === ''){
            h4.textContent = "error, some fills are error";
            h4.style.color = "red"
            break;
        }
        else{
                        h4.textContent = "";
                        h4.style.color = ""
                }
    }


    
    // inp.forEach(function(elem){
    //     if(elem.value === ''){
    //         h4.textContent = "error, some fills are error";
    //         h4.style.color = "red"
    //     }
    //     else{
    //             h4.textContent = "";
    //             h4.style.color = ""
    //     }
    // })

    // if(inp1.value === '' || inp2.value === ''){
    //     h4.textContent = "error, some fills are error";
    //     h4.style.color = "red"
    // }
    // else{
    //     h4.textContent = "";
    //     h4.style.color = ""
    // }
})