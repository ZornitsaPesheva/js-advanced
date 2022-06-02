function validate() {
    const input = document.querySelector('#email');
    input.addEventListener('change', (event) => {
        let value = event.target.value;
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))) {
            input.classList.add('error');
        }
        else {
            input.classList.remove('error');
        }
    });
}