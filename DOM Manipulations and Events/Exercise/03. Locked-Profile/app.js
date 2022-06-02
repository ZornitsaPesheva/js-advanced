function lockedProfile() {
    let buttons = document.querySelectorAll('button');
    function showMore(e) {
        let profile = e.target.parentElement;
        let locked = profile.querySelector('div input').checked;
        if (!locked) {
            let more = profile.querySelector('div');
            more.style.display = 'block';
        }
    }
    for (let button of buttons) {
        button.addEventListener('click', showMore)
    }
}