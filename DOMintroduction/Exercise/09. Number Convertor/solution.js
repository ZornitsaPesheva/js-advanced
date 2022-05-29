function solve() {
        let optionBinary = document.createElement('option');
        optionBinary.value = 'binary';
        optionBinary.innerHTML = 'Binary';
        let optionHexaDecimal = document.createElement('option');
        optionHexaDecimal.value = 'hexadecimal';
        optionHexaDecimal.innerHTML = 'Hexadecimal';
        let selectMenu = document.getElementById('selectMenuTo');
        selectMenu.appendChild(optionBinary);
        selectMenu.appendChild(optionHexaDecimal);

        function convertToBinary(x) {
            let bin = 0;
            let rem, i = 1, step = 1;
            while (x != 0) {
                rem = x % 2;
                x = parseInt(x / 2);
                bin = bin + rem * i;
                i = i * 10;
            }

            return bin;
        }

        function toHex(d) {
            return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
        }

        let converted = '';

        document.getElementsByTagName("button")[0].addEventListener('click', function () {
            let decimal = document.getElementById('input').value;         
            let convertTo = selectMenu.value;
            if (convertTo == 'binary') {
                converted = convertToBinary(decimal);
                console.log(converted);
                let result = document.getElementById('result');
                result.value = converted;
            }
            else if (convertTo == 'hexadecimal') {
                converted = toHex(decimal);
                let result = document.getElementById('result');
                result.value = converted;
            }
            else {}
        });
}