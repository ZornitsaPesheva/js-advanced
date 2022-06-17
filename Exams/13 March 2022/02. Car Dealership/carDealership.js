//https://judge.softuni.org/Contests/Practice/DownloadResource/20575

class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if(!model || model == '' || 
            !horsepower || !isInteger(horsepower) || horsepower < 0 || 
            !price || price < 0|| !mileage || mileage < 0) {
                throw new Error('Invalid input!');
        }
        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage} km - ${price}$`
    }
}