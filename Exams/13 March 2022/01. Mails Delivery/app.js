function solve() {
    let recipient = document.getElementById('recipientName').value;
    let title = document.getElementById('title').value;
    let message = document.getElementById('message').value;

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    let list = document.getElementById('list');

    addBtn.addEventListener('click', addFunction);
    resetBtn.addEventListener('click', resetFunction);

    function createElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        console.log(element);
        if (className) {
            element.className = className;
        }
        return element;
      }

    function addFunction() {
        if (recipient != '' && title != '' && message != '') {
            let li = document.createElement('li');
            list.appendChild(li);
            li.appendChild(createElement('h4', 'Title:' + title));
            li.appendChild(createElement('h4', 'Recipient Name:' + recipient));
            li.appendChild(createElement('span', message));
            let div = createElement('div');
            li.appendChild(div);
            let sendBtn = createElement('button', 'Send');
            sendBtn.id = 'send';
            let deletedBtn = createElement('button', 'delete');
            deletedBtn.id = 'delete';
        }
    }


}
solve()