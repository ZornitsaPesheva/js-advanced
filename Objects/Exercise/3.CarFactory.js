function carFactory(car) {
    car.engine = function() { 
        if (car.power >= 200) {
            car.engine = {
                power: 200,
                volume: 3500
            }
        }
        else if (car.engine >= 120) {
            car.engine = {
                power: 120,
                volume: 2400
            }
        } 
        else {
            car.engine = {
                power: 90,
                volume: 1800
            }
        }
    }
}

carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 });
carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17});
