function lockedProfile() {
    let buttons = document.querySelectorAll('button');
    
    function showHide(e) {
        let profile = e.target.parentElement;
        let btn = profile.querySelector('button');
        let locked = profile.querySelector('div input').checked;
        let more = profile.querySelector('div');
        if (!locked && btn.textContent == 'Show more') {
            more.style.display = 'block';
            btn.textContent = 'Hide it';
        }
        else {
            more.style.display = 'none';
            btn.textContent = 'Show more';
        }
        
    }
    for (let button of buttons) {
        button.addEventListener('click', showHide);
    }
}