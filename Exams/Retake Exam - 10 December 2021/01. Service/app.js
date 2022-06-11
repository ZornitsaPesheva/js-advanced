window.addEventListener('load', solve);

function solve() {
    let descritionField = document.querySelector('textarea');
    [nameField, phoneField] = document.querySelectorAll('input');

    let productType = document.querySelector('select');

    let sendFormBtn = document.querySelectorAll('button')[0];
    sendFormBtn.addEventListener('click', sendForm);

    let recievedOrders = document.getElementById('received-orders');
    
    function sendForm(e) {
        e.preventDefault();
        let div = document.createComment('div');
        div.classList.add('container');
        recievedOrders.appendChild(div);
        div.appendChild(createElement('h2', 'Product type for иepair: ', productType.value));
        div.appendChild(createElement('h3', 'Client information: ', nameField.value + ', ' + phoneField.value));
        div.appendChild(createElement('h4', 'Description of the problem: ', descritionField.value));
        div.appendChild(createElement('button', 'Start repair', '', 'start-btn'));
        div.appendChild(createElement('button', 'Finish repair', '', 'start-btn'));
    }

    function createElement(el, text, content, elClass) {
        let nodeEl = document.createElement(el);
        nodeEl.textContent = text + content;
        if (elClass) {
            nodeEl.classList.add(elClass);
        }
        return nodeEl;
    }

}