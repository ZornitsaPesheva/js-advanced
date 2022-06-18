window.addEventListener('load', solve);


function solve() {
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addFurniture);
    const furnitureList = document.getElementById('furniture-list');

    function addFurniture(e) {
        e.preventDefault();

        let [model, year, price] = document.querySelectorAll('input').value;
        let description = document.querySelector('textarea');

        if(model != '' && description != '' && year < 0 && price < 0) {
            let trInfo = createElement('tr', null, 'info');
            trInfo.appendChild(createElement('td', model));
            trInfo.appendChild(createElement('td', price));
            let tdBtns = createElement('td');
            trInfo.appendChild(tdBtns);
            tdBtns.appendChild(createElement('button', 'More Info', 'moreBtn', more));
            tdBtns.appendChild(createElement('button', 'Buy It', 'buyBtn', buy));
            let trHide = createElement('tr', null, 'hide');
            trHide.appendChild(createElement('td', 'Year: ' + year));
            let td = document.createComment('td', 'Description: ' + description);
            td.setAttribute('colspan', 3);
            trHide.appendChild(td);
            furnitureList.appendChild(trInfo);
            furnitureList.appendChild(trHide);

        }
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
