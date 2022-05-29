function generateReport() {
    let checked = [];
    let inputList = document.querySelectorAll('th input');
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].checked == true) {
            checked.push(i)
        }
    }
    console.log(checked);
    let array = [];
    let object = {};
    let rows = document.getElementsByTagName('table')[0].rows.length;
    for (let i = 0; i < rows; i++) {
        console.log(`get ${checked} for row${i}`);
    }
}