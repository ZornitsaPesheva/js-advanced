window.addEventListener('load', solve);

function solve() {
    let descritionField = document.querySelector('textarea');
    [nameField, phoneField] = document.querySelectorAll('input');

    let productType = document.querySelector('select');

    let sendFormBtn = document.querySelectorAll('button')[0];
    sendFormBtn.addEventListener('click', sendForm);

    let recievedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    let clear = document.getElementsByClassName('clear-btn')[0];
    clear.addEventListener('click', clearAll);
    
    function sendForm(e) {
        if (productType.value != '' && nameField.value != '' && phoneField.value != '' && descritionField.value != '') {
            e.preventDefault();
            let div = document.createElement('div');
            div.classList.add('container');
            recievedOrders.appendChild(div);
            div.appendChild(createElement('h2', 'Product type for repair: ', productType.value));
            div.appendChild(createElement('h3', 'Client information: ', nameField.value + ', ' + phoneField.value));
            div.appendChild(createElement('h4', 'Description of the problem: ', descritionField.value));
            div.appendChild(createElement('button', 'Start repair', '', 'start-btn', start));
            div.appendChild(createElement('button', 'Finish repair', '', 'finish-btn', finish, true));
            nameField.value = '';
            phoneField.value = '';
            descritionField.value = '';
        }
    }

    function createElement(el, text, content, elClass, evListener, disabled) {
        let nodeEl = document.createElement(el);
        nodeEl.textContent = text + content;
        if (elClass) {
            nodeEl.classList.add(elClass);
        }
        if (evListener) {
            nodeEl.addEventListener('click', evListener);
        }
        if (disabled) {
            nodeEl.setAttribute('disabled', '');
        }
        return nodeEl;
    }

    function start(e) {
        e.target.setAttribute('disabled', '');
        e.target.nextSibling.removeAttribute('disabled')
    }

    function finish(e) {
        completedOrders.appendChild(e.target.parentNode);
        e.target.previousSibling.remove();
        e.target.remove();
    }

    function clearAll() {
        let allCompleted = document.querySelectorAll('#completed-orders div');
        for (i = 0; i < allCompleted.length; i++) {
            allCompleted[i].remove();
        }
    }
}