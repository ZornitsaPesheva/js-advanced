function solve() {
    let hireWorkerBtn = document.getElementById('add-worker');
    hireWorkerBtn.addEventListener('click', hireWprkerFunc);
    let inputs = document.querySelectorAll('input');
    [fname, lname, email, birth, position, salary] = inputs;
    let tableBody = document.querySelector('tbody');

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
            let btn2 = document.createElement('button');
            btn2.classList.add('edit');
            btn2.textContent = 'Edit';
            td.appendChild(btn1);
            td.appendChild(btn2);
            tr.appendChild(td);
            let budget = document.querySelector('span');
            budget.textContent = Number(budget.textContent) + Number(salary);
            
        } 
        
    }
}
solve()