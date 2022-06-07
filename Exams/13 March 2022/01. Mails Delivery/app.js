function solve() {
    let recipientInput = document.getElementById('recipientName');
    let titletInput = document.getElementById('title');
    let messagetInput = document.getElementById('message');

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    let list = document.getElementById('list');
    let sentList = document.getElementsByClassName('sent-list')[0];

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

    function addFunction(e) {
        let recipient = recipientInput.value;
        let title = titletInput.value;
        let message = messagetInput.value;
    
        e.preventDefault();
        if (recipient != '' && title != '' && message != '') {
            let li = document.createElement('li');
            list.appendChild(li);
            li.appendChild(createElement('h4', 'Title:' + title));
            li.appendChild(createElement('h4', 'Recipient Name:' + recipient));
            li.appendChild(createElement('span', message));
            let div = createElement('div');
            div.id = 'list-action';
            li.appendChild(div);
            let sendBtn = createElement('button', 'Send');
            sendBtn.id = 'send';
            sendBtn.addEventListener('click', send);
            div.appendChild(sendBtn);
            let deletedBtn = createElement('button', 'Delete');
            deletedBtn.id = 'delete';
            btn.addEventListener('click', deleteEmail);
            div.appendChild(deletedBtn);

        }
    }

    function resetFunction(e) {
        e.preventDefault();
        recipientInput.value = '';
        titletInput.value = '';
        messagetInput.value = '';
    }

    function send() {
        let li = document.createElement('li');
        list.appendChild(li);
        li.appendChild(createElement('span', 'To: ' + recipient));
        li.appendChild(createElement('span', 'Title: ' + title));
        let div = createElement('div');
        div.className = "btn";
        li.appendChild(div);
        let btn = createElement('button', 'Delete', 'delete');
        btn.type = "submit";
        btn.addEventListener('click', deleteEmail);
        div.appendChild(btn);
    }

    function deleteEmail() {
        
    }
}
solve()