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
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let carToSell = this.availableCars.find(c => c.model == model);
        if (!carToSell) {
            throw new Error(`${model} was not found!`)
        }
        if (carToSell.mileage - desiredMileage > 40000) {
            carToSell.price -= carToSell.price / 10;
        }
        else if (carToSell.mileage - desiredMileage < 40000 && carToSell.mileage - desiredMileage > 0) {
            carToSell.price -= carToSell.price / 5
        }
        this.soldCars.push({model: carToSell.model, horsepower: carToSell.horsepower, soldPrice: carToSell.price});
        this.availableCars = this.availableCars.filter(c =>  c.model != model);
        this.totalIncome += this.totalIncome += carToSell.price;
        return `${model} was sold for ${carToSell.price.toFixed(2)}$`
    } 
} 