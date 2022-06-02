function addItem() {
    const content = document.getElementById('newItemText');
    const listElement = document.createElement('li');
    listElement.textContent = content.value;
    document.getElementById('items').appendChild(listElement);
    content.value = '';
}