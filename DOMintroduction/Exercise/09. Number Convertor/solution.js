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

        let converted = 0;

        document.getElementsByTagName("button")[0].addEventListener('click', function () {
            let decimal = Number(document.getElementById('input').value);         
            let convertTo = selectMenu.value;
            if (convertTo == 'binary') {
                converted = decimal.toString(2);
                result = document.getElementById('result');
                result.value = converted;
            }
            else if (convertTo == 'hexadecimal') {
                converted = decimal.toString(16).toUpperCase();
                let result = document.getElementById('result');
                result.value = converted;
            }
            else {}
        });
}