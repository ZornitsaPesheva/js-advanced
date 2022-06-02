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
        // let message = document.querySelector('#main textarea').value;
        // let encoded = '';
        // for (symbol in message) {
        //     let i = symbol.charCodeAt(0) + 1;   
        //     encoded += symbol;
        // }
        // console.log(encoded);
    }
    document.querySelector('button').addEventListener('click', encode);
    document.querySelectorAll('button')[1].addEventListener('click', decode);


}