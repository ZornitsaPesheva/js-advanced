window.addEventListener('load', solve);


function solve() {
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addFurniture);
    const furnitureList = document.getElementById('furniture-list');

    function addFurniture(e) {
        e.preventDefault();

        let inputs = document.querySelectorAll('input');
        let model = inputs[0].value; 
        let year = inputs[1].value; 
        let price = inputs[2].value;
        let description = document.querySelector('textarea');

        if(model != '' && description != '' && year >= 0 && price >= 0) {
            let trInfo = createElement('tr', null, 'info');
            trInfo.appendChild(createElement('td', model));
            trInfo.appendChild(createElement('td', Number(price).toFixed(2)));
            let tdBtns = createElement('td');
            trInfo.appendChild(tdBtns);
            tdBtns.appendChild(createElement('button', 'More Info', 'moreBtn', more));
            tdBtns.appendChild(createElement('button', 'Buy It', 'buyBtn', buy));
            let trHide = createElement('tr', null, 'hide');
            trHide.appendChild(createElement('td', 'Year: ' + year));
            let td = document.createElement('td');
            td.textContent = 'Description: ' + description.value;
            td.colspan = 3;
            trHide.appendChild(td);
            furnitureList.appendChild(trInfo);
            furnitureList.appendChild(trHide);
            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';
            description.value = '';
        }

    } 

    function more(e) {
        let text = e.target.textContent;
        console.log(text);
        let hiddenRow = document.getElementsByClassName('hide')[0];
        if (text == 'More Info') {
            e.target.textContent = 'Less Info';
            hiddenRow.style.display = 'contents'; 
        }
        else {
            hiddenRow.style.display = 'none'; 
            e.target.textContent = 'More Info';

        }
    }

    function buy(e) {
        let tdBtns = e.target.parentElement;
        console.log(tdBtns);
        let price = Number(document.getElementsByClassName('total-price')[0].textContent)
        price += Number(tdBtns.previousSibling.textContent);
        document.getElementsByClassName('total-price')[0].textContent = price.toFixed(2);
        tdBtns.parentElement.remove();
    }

    function createElement(type, content, className, evListener) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.classList.add(className);
        }
        if (evListener) {
            element.addEventListener('click', evListener)
        }
        return element;
    }
}
