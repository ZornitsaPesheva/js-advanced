function solve() {
    let [recipientNameInput, titleInput] = document.querySelectorAll('input');
    let messageArea = document.querySelector('textarea');

    const [addBtn, resetBtn] = document.querySelectorAll('button');
    const [list, sentList, deleteList] = document.querySelectorAll('ul');


    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let recipientName = recipientNameInput.value;
        let title = titleInput.value;
        let message = messageArea.value;
        if (recipientName != '' && title != '' && message != '') {
            let li = createElement('li');
            list.appendChild(li);
            let h4title = createElement('h4', 'Title: ' + title);
            li.appendChild(h4title);
            let h4RecipientName = createElement('h4', 'Recipient Name: ' + recipientName);
            li.appendChild(h4RecipientName);
            let span = createElement('span', message);
            li.appendChild(span);
            let div = document.createElement('div');
            li.appendChild(div);
            let sendBtn = createElement('button', 'Send', 'send');
            sendBtn.type = 'submit';
            sendBtn.addEventListener('click', function() {
                let liSent = createElement('li');
                sentList.appendChild(liSent);
                let spanTo = createElement('span', 'To: ' + recipientName);
                liSent.appendChild(spanTo);
                let spanTitle = createElement('span', 'Title: ' + title);
                liSent.appendChild(spanTitle);
                let div = document.createElement('div');
                div.classList.add('btn');
                let btn = createElement('button', 'Delete');
                btn.type = 'submit';
                btn.classList.add('delete');
                btn.addEventListener('click', function() {
                    addToDeleted();
                    liSent.remove();
                })
                div.appendChild(btn);
                liSent.appendChild(div);
                console.log(li);
                li.remove();
            });
            div.appendChild(sendBtn);
            let deleteBtn = createElement('button', 'Delete', 'delete');
            deleteBtn.addEventListener('click', function() {
                addToDeleted();
                li.remove();
            })
            div.appendChild(deleteBtn);
            deleteBtn.type = 'submit';
            clearValues();
            
            function addToDeleted(){
                let liDelete = document.createElement('li');
                deleteList.appendChild(liDelete);
                liDelete.appendChild(createElement('span', 'To: ' + recipientName));
                liDelete.appendChild(createElement('span', 'Title: ' + title));
            }

            function createElement(type, content, id) {
                const element = document.createElement(type);
                element.textContent = content;
                if (id) {
                    element.id = id;
                }
                return element;
            }

        }
    })

    resetBtn.addEventListener('click', function(e) {
        clearValues();
        e.preventDefault();
    })
    
    function clearValues() {
        recipientNameInput.value = '';
        titleInput.value = '';
        messageArea.value = '';
    }
}

solve()