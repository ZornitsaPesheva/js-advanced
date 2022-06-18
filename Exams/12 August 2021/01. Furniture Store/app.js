window.addEventListener('load', solve);


function solve() {
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addFurniture);
    const furnitureList = document.getElementById('furniture-list');
    const totalPriceElement = document.querySelector('.total-price');

    function addFurniture(e) {
        e.preventDefault();

        let inputs = document.querySelectorAll('input');
        let model = inputs[0].value; 
        let year = Number(inputs[1].value); 
        let price = Number(inputs[2].value);
        let description = document.querySelector('textarea');

        if(
            model != '' && description != '' && year > 0 && price > 0) {
            let trInfo = createElement('tr', null, 'info');
            trInfo.appendChild(createElement('td', model));
            trInfo.appendChild(createElement('td', Number(price).toFixed(2)));
            let tdBtns = createElement('td');

            trInfo.appendChild(tdBtns);
            let moreBtn = createElement('button', 'More Info', 'moreBtn', more);
            let buyBtn = createElement('button', 'Buy it', 'buyBtn', buy)
            tdBtns.appendChild(moreBtn);
            tdBtns.appendChild(buyBtn);
            let trHide = createElement('tr', null, 'hide');
            trHide.appendChild(createElement('td', 'Year: ' + year));
            let td = document.createElement('td');
            td.colSpan = 3;
            td.textContent = 'Description: ' + description.value;
            trHide.appendChild(td);
            furnitureList.appendChild(trInfo);
            furnitureList.appendChild(trHide);
            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';
            description.value = '';

            function more() {
                let text = moreBtn.textContent;
                
                if (text == 'More Info') {
                    moreBtn.textContent = 'Less Info';
                    trHide.style.display = 'contents'; 
                }
                else {
                    trHide.style.display = 'none'; 
                    moreBtn.textContent = 'More Info';
        
                }
            }

            function buy() {
                let totalPrice = Number(totalPriceElement.textContent)
                totalPrice += price;
                totalPriceElement.textContent = totalPrice.toFixed(2);
                trInfo.remove();
                trHide.remove();
            }
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
