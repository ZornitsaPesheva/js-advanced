function encodeAndDecodeMessages() {
    function encode(e) {
        let message = document.querySelector('#main textarea').value;
        let array = [];
        for (let symbol of message) {
            let i = symbol.charCodeAt(0);   
            array.push(i + 1);
        }
        let encoded = String.fromCharCode(...array);
        let receiver = document.querySelectorAll('#main textarea')[1];
        receiver.value = encoded;
    }
    function decode(e) {
        let message = document.querySelectorAll('#main textarea')[1].value;
        let array = [];
        for (let symbol of message) {
            let i = symbol.charCodeAt(0);   
            array.push(i - 1);
        }
        let decoded = String.fromCharCode(...array);
        let receiver = document.querySelectorAll('#main textarea')[1];
        receiver.value = decoded;
    }
    document.querySelector('button').addEventListener('click', encode);
    document.querySelectorAll('button')[1].addEventListener('click', decode);
}