function colorize() {
    // const rows = document.getElementsByTagName('tr');
    // for (let i = 1; i < rows.length; i += 2){
    //     rows[i].style.background = 'Teal'
    // }
    const rows = [...document.querySelectorAll('tr:nth-child(2n)')]
    for (let i = 0; i < rows.length; i ++){
        rows[i].style.background = 'Teal'
    }
}