window.addEventListener('load', solve);

function solve() {
    let descritionField = document.querySelector('textarea');
    [nameField, phoneField] = document.querySelectorAll('input');

    let type = document.querySelector('select').value;

    let sendFormBtn = document.querySelectorAll('button')[0];
    sendFormBtn.addEventListener('click', sendForm);

    let recievedOrders = document.getElementById('received-orders');
    
    function sendForm(e) {
        e.preventDefault();
        let div = document.createComment('div');
        div.classList.add('container');
        recievedOrders.appendChild(div);
        
    }

}