function solve() {
    let hireWorkerBtn = document.getElementById('add-worker');
    hireWorkerBtn.addEventListener('click', hireWprkerFunc);
    let inputs = document.querySelectorAll('input');
    [fname, lname, email, birth, position, salary] = inputs;

    function hireWprkerFunc(e) {
        e.prebentDefault();
        if(![...inputs].some(i => i.value == '')){
            
        } 
    }
}
solve()