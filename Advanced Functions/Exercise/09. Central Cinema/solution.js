function solve() {

    let inputs = document.querySelectorAll('input');
    const [mName, hall, price] = inputs;
    let onScreenBtn= document.getElementsByTagName('button')[0];
    onScreenBtn.addEventListener('click', addMovie);
    let clearElement = document.querySelectorAll('button')[1];
    let ulElement = document.querySelector('ul');
    let ulElement2 = document.querySelectorAll('ul')[1];


    function addMovie(e) {
        e.preventDefault();
        if (mName.value != '' && hall.value != '' && price.value != '' && !isNaN(Number(price.value))) {
            let span = document.createElement('span');
            span.textContent = mName.value;
            let strong = document.createElement('strong');
            strong.textContent = 'Hall: ' + hall.value;
            
            let strongInDiv = document.createElement('strong');
            let tprice = Number(price.value).toFixed(2)
            strongInDiv.textContent = tprice; 
            let input = document.createElement('input');
            input.setAttribute('placeholder', 'Tickets Sold');
            let btn = document.createElement('button');
            btn.textContent = 'Archive';
            let div = document.createElement('div');
            div.appendChild(strongInDiv);
            div.appendChild(input);
            div.appendChild(btn);

            let ul = document.querySelector('#movies ul');
            let li = document.createElement('li');
            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(div);
            ul.appendChild(li);
            mName.value = ''; hall.value = ''; price.value = '';
            btn.addEventListener('click', (e) => archive(e, input.value, span.textContent  ,tprice));
            
        }

        function archive(e,value, movieName,ticketPrice){
            if (value !== ""){
                e.target.parentNode.parentNode.remove();
                let liElement = creatingElements('li', "", ulElement2);
                creatingElements('span', movieName, liElement)
                creatingElements('strong', `Total amount: ${(ticketPrice*value).toFixed(2)}`, liElement);
                let deleteButton = creatingElements('button', 'Delete', liElement)
                deleteButton.addEventListener('click', (e) => e.target.parentNode.remove())
            }
        }

        function creatingElements(elementToCreate, textContent, appendTo){
            let newElement = document.createElement(elementToCreate);
            newElement.textContent = textContent;
            if (appendTo){
                appendTo.appendChild(newElement);
            }
            return newElement
        }

        clearElement.addEventListener('click', (e) => {
 
            let elements = Array.from(ulElement2.children)
            if(elements.length > 1){
                for (let i = 0; i < elements.length; i++){
                    let child = elements[i]
 
                    child.remove()
                }
            }else if(elements.length == 1){
                elements[0].remove()
            }
        })
    }
}