function generateReport() {
    let checked = [];
    let inputList = document.querySelectorAll('th input');
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].checked == true) {
            checked.push(i)
        }
    }

    let array = [];
    let rows = document.getElementsByTagName('table')[0].rows.length;
    for (let i = 1; i < rows; i++) {
        let object = {};
        for (let j = 0; j < checked.length; j++) {
            let propName = document.querySelector(`th:nth-of-type(${checked[j]+1})`).textContent.toLowerCase().trim();
            let propValue = document.querySelector(`tbody tr:nth-of-type(${i}) td:nth-of-type(${checked[j]+1})`).textContent
            object[propName] = propValue;
        }
        array.push(object);
    }
    document.getElementById('output').textContent = JSON.stringify(array);
}