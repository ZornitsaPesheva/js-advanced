function addItem() {
    const content = document.getElementById('newItemText');
    const listElement = document.createElement('li');
    listElement.textContent = content.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    listElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    document.getElementById('items').appendChild(listElement);
    content.value = '';
    
    function onDelete(e) {
        e.target.parentElement.remove();
    }
}
