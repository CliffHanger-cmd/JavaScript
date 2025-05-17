// Create a tabbed interface where clicking on tabs displays different content sections without page overload

var about = document.querySelector('#about')
var home = document.querySelector('#home')
var contact = document.querySelector('#contact')

var abouttext = document.querySelector('#Abouttext')
var hometext = document.querySelector('#Hometext')
var contacttext = document.querySelector('#Contacttext')



home.addEventListener("click", function(){
    removeText();
    abouttext.style.display = 'block'
})
about.addEventListener("click", function(){
    removeText()
    hometext.style.display = 'block'
})
contact.addEventListener("click", function(){
    removeText()
    contacttext.style.display = 'block'
})

function removeText(){
    document.querySelectorAll('h3').forEach(function(h3){
        h3.style.display = 'none';
    })
}