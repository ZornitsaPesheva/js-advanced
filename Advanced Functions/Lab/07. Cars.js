function createModify(input) {
    const cars = [];


    function inheritCar(oldCar, newCar) {

    }

    let r = {
        create: (rest) => {
            if (rest.length == 1) {
                let car = {};
                car.name = rest[0];
                cars.push(car);
            }
            else {
                let oldCar = cars.find(c => c.name == rest[2]) 
                let car = Object.assign({}, oldCar);
                car.name = rest[0];
                car.inherit = rest[2];
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
            let inheritance = cars.find(c => c.inherit != undefined);
            let props = [];
            for (const prop in car) {
                if (inheritance) {
                    let inheritedCar = cars.find(c => c.name == car[prop]);
                    for (const p in inheritedCar) {
                        if (p != 'name' && p != 'inherit') {
                            result.push(`${p}:${inheritedCar[p]}`);
                            props.push(p);
                        }
                    }
                }
                if (prop != 'name' && prop != 'inherit') {
                    if (!props.includes(prop)) {
                        result.push(`${prop}:${car[prop]}`);
                    }
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