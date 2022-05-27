function carFactory(car) {
    setengine = function(car) { 
        if (car.power >= 200) {
            return car.engine = { power: 200, volume: 3500 }
        }
        else if (car.power >= 120) {
            return car.engine = { power: 120, volume: 2400 }
        } 
        else { 
            return car.engine = { power: 90, volume: 1800 }r
        }
    }

    setcarriage = function(car) {
        if (car.carriage == 'hatchback') {
            return car.carriage = { tipe: 'hatchback' ,color: car.color }
        }
        else {
            return car.carriage = { tipe: 'coupe' ,color: car.color }
        }
    }
    
    setWheels = function(car) {
        
    }

    setengine(car);
    setcarriage(car);

    return car;
}

console.log(carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));
console.log(carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17}));
