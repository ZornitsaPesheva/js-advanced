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
        if (sum == firstColumnSum && 
            firstColumnSum == secondColumnSum &&
            secondColumnSum == tirthColumnSum) {
                document.querySelector('#check p').textContent =
                "You solve it! Congratulations!";
                document.querySelector('#check p').style.color = 'green';
                document.querySelector('table').style.border = "2px solid green";
        }
        else {
            document.querySelector('#check p').textContent =
                "NOP! You are not done yet...";
            document.querySelector('#check p').style.color = 'red';
            document.querySelector('table').style.border = "2px solid red";
        }
    }

    checkBtn.addEventListener('click', check);
}