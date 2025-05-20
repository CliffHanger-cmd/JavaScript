const listE1 = document.querySelector('#item-list');
const addButton = document.querySelector('#add-button');
const inputE1 = document.querySelector('#item-input');

// Deligate remove clicks
listE1.addEventListener('click', (event) => {
    if(event.target.classList.contains('remove-btn')) {
        const li = event.target.closest('li');
        listE1.removeChild(li);
    }
})

addButton.addEventListener('click', () => {
    const text = inputE1.value.trim();
    if(!text){
        alert('Please enter a valid item');
        return;
    }


    //create a new list item
    const newItem = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    newItem.append(span, removeBtn);
    listE1.appendChild(newItem);

    inputE1.value = ''; // clear the input field after adding the item.
    inputE1.focus(); // set focus back to the input field.
});