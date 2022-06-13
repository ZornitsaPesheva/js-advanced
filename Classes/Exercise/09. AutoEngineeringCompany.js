function autoEngineeringCompany(input) {
    let cars = new Map();
    
    input.forEach(element => {
        [carBrand, carModel, producedCars] = element.split(' | ');
        if (cars.has(carBrand)) {
            let carModels = cars.get(carBrand);
            if (carModels.has(carModel)) {
                let qtt = carModels.get(carModel) + Number(producedCars);
                carModels.set(carModel, qtt);
            }
            else {
                carModels.set(carModel, Number(producedCars))
            }
        }
        else {
            let newBrand = new Map();
            newBrand.set(carModel, Number(producedCars));
            cars.set(carBrand, newBrand);
        }
    });

    for (let [carBrand, carModels] of cars) {
        console.log(carBrand);
        for (let [carModel, producedCars] of carModels) {
            console.log(`###${carModel} -> ${producedCars}`)
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10']);