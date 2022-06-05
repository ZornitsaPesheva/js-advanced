function solve() {

    function addMovie(inputs) {
        [mName, hall, price] = inputs;
        let span = document.createElement('span');
        span.textContent = mName;
        let strong = document.createElement('strong');
        strong.textContent = hall;
        
        let strongInDiv = document.createElement('strong');
        strongInDiv.textContent = Number(price); 
        let input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        let btn = document.createElement('button');
        btn.textContent = 'Archive';
        let div = document.createElementDiv('div');
        div.appendChild(strongInDiv);
        div.appendChild(input);
        div.appendChild(btn);

        let ul = document.querySelector('section ul');
        ul.appendChild(span);
        ul.appendChild(strong);
        ul.appendChild(div);
    }

    let inputs = document.querySelectorAll('input');

    if (![...inputs].some(i => i.value == '')) {
        let onScreen = document.getElementsByTagName('button');
        onScreen.addEventListener('click', addMovie);
    }

    
}