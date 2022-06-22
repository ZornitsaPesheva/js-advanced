// https://judge.softuni.org/Contests/Practice/DownloadResource/12208
function solution() {
    const addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addGift);
    let name = document.querySelector('input');
    let [listOfGifts, sentGifts, discardedGifts] = document.querySelectorAll('ul');

    function addGift(e) {
        let gift = document.createElement('li');
        gift.textContent = name.value;
        listOfGifts.appendChild(gift);
        
    }
}