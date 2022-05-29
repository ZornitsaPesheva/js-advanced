function solve() {
        let optionBinary = document.createElement('option');
        optionBinary.value = 'binary';
        optionBinary.innerHTML = 'binary';
        let optionHexaDecimal = document.createElement('option');
        optionHexaDecimal.value = 'hexadecimal';
        optionHexaDecimal.innerHTML = 'hexadecimal';
        let selectMenu = document.getElementById('selectMenuTo');
        selectMenu.appendChild(optionBinary);
        selectMenu.appendChild(optionHexaDecimal);

        function convertToBinary(x) {
            let bin = 0;
            let rem, i = 1, step = 1;
            while (x != 0) {
                rem = x % 2;
                // console.log(
                //     `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
                // );
                x = parseInt(x / 2);
                bin = bin + rem * i;
                i = i * 10;
            }

            return bin;
        }

        function decimalToHexString(number)
        {
        if (number < 0)
        {
            number = 0xFFFFFFFF + number + 1;
        }

        return number.toString(16).toUpperCase();
        }

        let converted = '';

        document.getElementsByTagName("button")[0].addEventListener('click', function () {
            let decimal = document.getElementById('input').value;         
            let convertTo = selectMenu.value;
            if (convertTo == 'binary') {

                converted = convertToBinary(decimal);
            }
            else if (convertTo == 'hexadecimal') {
                converted = decimalToHexString(decimal)
            }
        });
    
        let result = document.getElementById('result');
        console.log(result);
       // result.value = converted;

}