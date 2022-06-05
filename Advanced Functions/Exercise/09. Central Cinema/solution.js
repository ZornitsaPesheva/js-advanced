function solve() {

    let inputs = document.querySelectorAll('input');

    const [mName, hall, price] = inputs;

  

    let onScreenBtn= document.getElementsByTagName('button')[0];


    onScreenBtn.addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();
        if (mName.value != '' && hall.value != '' && price.value != '' && !isNaN(Number(price.value))) {
        console.log([mName, hall, price]);
        let span = document.createElement('span');
        span.textContent = mName.value;
        let strong = document.createElement('strong');
        strong.textContent = hall.value;
        
        let strongInDiv = document.createElement('strong');
        strongInDiv.textContent = Number(price.value).toFixed(2); 
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
        }

    }


    
}