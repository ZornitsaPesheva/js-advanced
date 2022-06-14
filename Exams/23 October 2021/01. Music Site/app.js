window.addEventListener('load', solve);

function solve() {
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSong);
    let allHits = document.getElementsByClassName('all-hits-container')[0];

    let inputs = document.querySelectorAll('input');

    function addSong(e) {
        e.preventDefault();
        if (![...inputs].some(i => i.value == '')) {
            let div = document.createElement('div');
            div.classList.add('hits-info');
            let img = document.createElement('img');
            img.src = './static/img/img.png';
            allHits.appendChild(div);
            div.appendChild(img);
            div.appendChild(createElement('h2', 'Genre: ', inputs[0].value));
            div.appendChild(createElement('h2', 'Name: ', inputs[1].value));
            div.appendChild(createElement('h2', 'Author: ', inputs[2].value));
            div.appendChild(createElement('h3', 'Date: ', inputs[3].value));
            div.appendChild(createElement('button', 'Save Song', '', 'save-btn', saveSong));
            div.appendChild(createElement('button', 'Save Song', '', 'like-btn', likeSong));
            div.appendChild(createElement('button', 'Delete', '', 'delete-btn', deleteSong));

        }
    }

    function createElement(type, content, value, classNameValue, evListener) {
        const element = document.createElement(type);
        element.textContent = content + value;
        if (classNameValue != '') {
            element.classList.add(classNameValue);
        }
        if (evListener){
            element.addEventListener('click', evListener);
        }
        return element;
    }

    function saveSong() {

    }

    function likeSong() {

    }

    function deleteSong() {
        
    }

}