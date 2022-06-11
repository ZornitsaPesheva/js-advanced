function solve() {
    let hireWorkerBtn = document.getElementById('add-worker');
    hireWorkerBtn.addEventListener('click', hireWprkerFunc);
    let inputs = document.querySelectorAll('input');
    let tableBody = document.querySelector('tbody');
    let budget = document.querySelector('span');

    function hireWprkerFunc(e) {
        e.preventDefault();
        if(![inputs].some(i => i.value == '')){
            let salary = 0;
            let tr = document.createElement('tr');
            tableBody.appendChild(tr);
            for (i = 0; i < inputs.length; i++) {
                let td = document.createElement('td');
                td.textContent = inputs[i].value;
                tr.appendChild(td);
                if (inputs[i].id == 'salary'){
                    salary = inputs[i].value;
                }
                inputs[i].value = '';
            }
            let td = document.createElement('td');
            let btn1 = document.createElement('button');
            btn1.classList.add('fired');
            btn1.textContent = 'Fired';
            btn1.addEventListener('click', fireFunc);
            let btn2 = document.createElement('button');
            btn2.classList.add('edit');
            btn2.textContent = 'Edit';
            btn2.addEventListener('click', editFunc);
            td.appendChild(btn1);
            td.appendChild(btn2);
            tr.appendChild(td);
            budget.textContent = (Number(budget.textContent) + Number(salary))
                .toFixed(2);
            
        } 

        function editFunc(e) {
            e.preventDefault();
                let row = e.target.parentNode.parentNode;
                let cells = row.querySelectorAll('td');
                let j = 0;
                for (i = 0; i < cells.length - 1; i++ ){
                    console.log(inputs[j]);
                    inputs[j].value = cells[i].textContent;
                    j++;
                
                }
                budget.textContent = 
                    (Number(budget.textContent) - cells[5].textContent).toFixed(2);
                row.remove();
        }

        function fireFunc(e) {
            e.preventDefault();
            let row = e.target.parentNode.parentNode;
            let cells = row.querySelectorAll('td');
            budget.textContent = (Number(budget.textContent) - cells[5].textContent)
            .toFixed(2);
            row.remove();
        }
    }
}
solve()