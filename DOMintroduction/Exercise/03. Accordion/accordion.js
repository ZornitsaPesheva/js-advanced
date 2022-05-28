function toggle() {
    let extra = document.getElementById('extra');
    if (extra.style.display == '' || extra.style.display == 'none' ) {
        extra.style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }
    else {
        extra.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }
}