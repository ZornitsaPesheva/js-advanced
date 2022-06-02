function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let option = document.createElement('option');
    option.textContent = text;
    option.value = value;
    let select = document.getElementById('menu');
    select.appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = ''
}