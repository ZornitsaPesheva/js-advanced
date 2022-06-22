// https://judge.softuni.org/Contests/Practice/DownloadResource/12208
function solution() {
    const addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addGift);
    let name = document.querySelector('input');
    let [listOfGifts, sentGifts, discardedGifts] = document.querySelectorAll('ul');
    sortedList = [];

    function addGift(e) {
        listOfGifts.innerHTML = '';
        sortedList.push(name.value);
        sortedList.sort((a, b) => a.localeCompare(b));
        for (let g of sortedList) {
            let gift = document.createElement('li');
            gift.textContent = g;
            gift.classList.add('gift');
            listOfGifts.appendChild(gift);
            let sendBtn = document.createElement('button');
            sendBtn.id = 'sendButton';
            sendBtn.textContent = 'Send';
            let discardBtn = document.createElement('button');
            discardBtn.id = 'discardButton';
            discardBtn.textContent = 'Discard';
            gift.appendChild(sendBtn);
            gift.appendChild(discardBtn);
            sendBtn.addEventListener('click', function() {
                sentGifts.appendChild(gift);
                discardBtn.remove();
                sendBtn.remove();
                sortedList.splice(sortedList.findIndex(sg => sg == g), 1);
            });
            discardBtn.addEventListener('click', function() {
                discardedGifts.appendChild(gift);
                sendBtn.remove();
                discardBtn.remove();
                sortedList.splice(sortedList.findIndex(sg => sg == g), 1);
            })
        }
        name.value = '';
    }
}