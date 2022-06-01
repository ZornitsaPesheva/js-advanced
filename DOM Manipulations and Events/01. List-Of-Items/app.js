function addItem() {
    const content = document.getElementById('newItemText').value;
    const listElement = document.createElement('li');
    listElement.textContent = content;
    document.getElementById('items').appendChild(listElement);
    document.getElementById('newItemText').value = '';
}