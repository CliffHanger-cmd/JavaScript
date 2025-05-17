// Create a serach bar that display live search results showing results as users typeof, updating the results without requiring a full page reload 

var input = document.querySelector("input")
var data = [
    {name: "Cliffhanger", src: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"},
    {name: "Cliff", src: "https://th.bing.com/th/id/OIP.G1wORBMeVrgBbNJ5qggXJQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain"},
    {name: "Cliffhunger", src: "https://wallpapers.com/images/hd/pretty-profile-pictures-k1qebyviiyl0wx0x.jpg"},
    {name: "Cliffhero", src: "https://wallpapers.com/images/hd/cool-profile-picture-7fk2du857svpto74.jpg"}
]

var pers = ''
data.forEach(function(elem){
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
})

document.querySelector('.people').innerHTML = pers

input.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
        console.log(e)
    })
    var newusers = ""
    matching.forEach(function(elem){
        newusers += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}" alt="">
                        </div>
                        <h4>${elem.name}</h4>
                    </div>`
    })
    
    document.querySelector('.people').innerHTML = newusers
})