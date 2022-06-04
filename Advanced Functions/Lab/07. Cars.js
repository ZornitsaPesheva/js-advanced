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
                car.name = rest[0];
                cars.push(car);
            }
            
        },

        set: (rest) => {
            let car = cars.find(c => c.name == rest[0]);
            let property = rest[1];
            car[property] = rest[2];
        },

        print: (rest) => {
            let car = cars.find(c => c.name == rest[0]);
            let result = [];
            for (const prop in car) {
                if (prop != 'name') {
                    result.push(`${prop}:${car[prop]}`);
                }
            }
            console.log(result.join(','))
        }

    }

    input.forEach(el => {
        let [command, ...rest] = el.split(' ');
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