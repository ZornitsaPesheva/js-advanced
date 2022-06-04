function createModify(input) {
    const cars = [];

    let r = {
        create: (rest) => {
            let instruction = rest.split(' ');
            if (instruction.length == 1) {
                let car = {};
                car.name = instruction[0];
                cars.push(car);
            }
            else {
                let oldCar = cars.find(c => c.name == instruction[2]) 
                let car = Object.assign({}, oldCar)
                cars.push(car);
            }
        },

        set: (rest) => {
            let instruction = rest.split(' ');
            let car = cars.find(c => c.name == instruction[0]);
            car[instruction[1]] = instruction[2];
        }

    }

    objects.forEach(element => {
        let [command, ...rest] = element.split(' ');
        result = r[command](result, rest);
    });





    function create() {

    }
}

createModify([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);