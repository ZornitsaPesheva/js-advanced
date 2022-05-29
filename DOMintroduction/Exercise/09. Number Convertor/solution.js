function solve() {
        let optionBinary = document.createElement('option');
        optionBinary.value = 'binary';
        optionBinary.innerHTML = 'binary';
        let optionDecimal = document.createElement('option');
        optionDecimal.value = 'decimal';
        optionDecimal.innerHTML = 'decimal';
        let selectMenu = document.getElementById('selectMenuTo');
        selectMenu.appendChild(optionBinary);
        selectMenu.appendChild(optionDecimal);

        document.getElementsByTagName("button")[0].addEventListener('click', function () {
            let decimal = document.getElementById('input').value;
            console.log(decimal);
        });
        

}