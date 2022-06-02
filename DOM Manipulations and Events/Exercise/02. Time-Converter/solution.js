function attachEventsListeners() {
    let inputs = document.querySelectorAll('input');

    function convertToObject(value, time) {
        let seconds = 0;
        let object = {};
        switch (time) {
            case 'days': seconds = value * 24 * 60 * 60; break;
            case 'hours': seconds = value * 60 * 60; break;
            case 'minutes': seconds = value * 60; break;
            case 'seconds': seconds = value; break;
        }
        object.seconds = seconds;
        object.minutes = object.seconds / 60;
        object.hours = object.minutes / 60;
        object.days = object.hours / 24;
        return object;
    }

    function convert(e){
        let given = e.target.parentElement.querySelector('input');
        let value = given.value;
        let object = convertToObject(value, given.id);
        for (let input of inputs) {
            if (input.type == 'text' && input.id != given.id){
                console.log(input.id);
                switch (input.id) {
                    case 'days': input.value = object.days; break;
                    case 'hours': input.value = object.hours; break;
                    case 'minutes': input.value = object.minutes; break;
                    case 'seconds': input.value = object.seconds; break;
                }
            }
        }
    }

    for (let input of inputs) {
        if (input.type == 'button') {
            input.addEventListener("click", convert);
        }
    }
}