// HOFS - higher Order function

// error handling like pro - try Catch
function divide(a,b){
    try{
        if(b === 0){
            throw Error("Koi Garbad hai");
        }
        console.log(a/b);
    }
    catch(err){
        console.log(err)
    }
}

divide(12,0)

// #custom event 

const evt = new Event("hello")

document.querySelector("button")
.addEventListener("hello", function(){
    alert("hi")
})

document.querySelector("button").dispatchEvent(evt)




