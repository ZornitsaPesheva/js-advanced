function generateReport() {
    let checked = [];
    let inputList = document.querySelectorAll('th input');
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].checked == true) {
            checked.push(i)
        }
    }
   // console.log(checked);
    let array = [];
    let object = {};
    let rows = document.getElementsByTagName('table')[0].rows.length;
    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < checked.length; j++) {
            let propName = document.querySelector(`th:nth-of-type(${checked[j]+1})`).textContent;
            console.log(propName);
        }

    }
    //onsole.log(checked[0]);
}