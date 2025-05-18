// ### Project Exercise 7: Change Background Color with JavaScript

// - **Topic Covered:** JavaScript
// - **Description:** Write a JavaScript script that changes the background color of the webpage when a button is clicked. The button should trigger a function that alters the `background-color` of the webpage. Use DOM manipulation to select the button element and apply an event listener for the click event.
// - **Skills Covered:** Basic JavaScript syntax, functions, event handling, and DOM manipulation.

const button = document.querySelector('button')
const main = document.querySelector('#main')

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener('click', function(){
    main.style.backgroundColor = getRandomColor(),
    button.style.color = getRandomColor()
    button.style.backgroundColor = getRandomColor()
})


