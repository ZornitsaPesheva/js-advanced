function createModify(input) {
    const cars = [];

    let r = {
        create: (rest) => {
            if (rest.length == 1) {
                let car = {};
                car.name = rest[0];
                cars.push(car);
            }
            else {
                let oldCar = cars.find(c => c.name == rest[2]) 
                let car = Object.assign({}, oldCar)
                cars.push(car);
            }
        },

        set: (rest) => {
            let car = cars.find(c => c.name == rest[0]);
            car[rest[1]] = rest[2];
        },

        print: (rest) => {
            console.log(cars.find(c => c.name == rest[0]));
        }

    }

    input.forEach(el => {
        let [command, ...rest] = el.split(' ');
        console.log(rest);
        result = r[command](rest);
        
    });


}

createModify([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);