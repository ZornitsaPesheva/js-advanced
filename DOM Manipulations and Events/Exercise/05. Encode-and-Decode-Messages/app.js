function encodeAndDecodeMessages() {
    let receiver = document.querySelectorAll('#main textarea')[1];
    function encode(e) {
        let sender = document.querySelector('#main textarea'); 
        let message = sender.value;
        let array = [];
        for (let symbol of message) {
            let i = symbol.charCodeAt(0);   
            array.push(i + 1);
        }
        let encoded = String.fromCharCode(...array);
        receiver.value = encoded;
        sender.value = '';
    }
    function decode(e) {
        let message = receiver.value;
        let array = [];
        for (let symbol of message) {
            let i = symbol.charCodeAt(0);   
            array.push(i - 1);
        }
        let decoded = String.fromCharCode(...array);
        receiver.value = decoded;
    }
    document.querySelector('button').addEventListener('click', encode);
    document.querySelectorAll('button')[1].addEventListener('click', decode);
}