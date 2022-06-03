function solve() {
    let checkBtn = document.querySelector('button');

    function check() {
        let firstRow = document.querySelectorAll('tr')[2];
        let secondRow = document.querySelectorAll('tr')[3];
        let tirthRow = document.querySelectorAll('tr')[4];
        let firsRowValues = firstRow.querySelectorAll('td input');
        let sum = Number(firsRowValues[0].value) 
            + Number(firsRowValues[1].value) 
            + Number(firsRowValues[2].value);
        let firstColumnSum = 
            Number(firstRow.querySelectorAll('td input')[0].value)
            + Number(secondRow.querySelectorAll('td input')[0].value)
            + Number(tirthRow.querySelectorAll('td input')[0].value);
        let secondColumnSum = 
            Number(firstRow.querySelectorAll('td input')[1].value)
            + Number(secondRow.querySelectorAll('td input')[1].value)
            + Number(tirthRow.querySelectorAll('td input')[1].value);
        let tirthColumnSum = 
            Number(firstRow.querySelectorAll('td input')[2].value)
            + Number(secondRow.querySelectorAll('td input')[2].value)
            + Number(tirthRow.querySelectorAll('td input')[2].value);
    }

    checkBtn.addEventListener('click', check);
}