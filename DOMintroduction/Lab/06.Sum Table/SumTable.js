function sumTable() {
    const rows = Array.from(document.querySelectorAll('table tr')).slice(1, -1);
    let sum = 0;
    for (let row of rows) {
        const value = (Number(row.lastElementChild.textContent));
        sum += value;
    }
    document.getElementById('sum').textContent = sum;
}