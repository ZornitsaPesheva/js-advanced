function autoEngineeringCompany(input) {
    let cars = new Map();
    
    input.forEach(element => {
        [carBrand, carModel, produceCars] = element.split(' | ');
        if (cars.has(carBrand)) {
            let carModels = cars.get(carBrand);
            if (carModels.has(carModel)) {
                let qtt = carModels.get(carModel) + Number(produceCars);
                carModels.set(carModel, qtt);
            }
            else {
                carModels.set(carModel, produceCars)
            }
        }
        else {
            let newBrand = new Map();
            newBrand.set(carModel, produceCars);
            cars.set(carBrand, newBrand);
        }
    });

}