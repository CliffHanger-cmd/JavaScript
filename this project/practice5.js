// event delegation.

var parent = document.querySelector('#parent');
parent.addEventListener('click', function(event){
    if(event.target.id === "play"){
        console.log("pLAY SONG")
    }
    else{
        console.log("Pausesong")
    }
})


