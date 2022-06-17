//https://judge.softuni.org/Contests/Practice/DownloadResource/20575

class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if(model == '' || horsepower < 0 || price < 0 || mileage < 0) {
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
        else if (carToSell.mileage - desiredMileage <= 40000 && carToSell.mileage - desiredMileage > 0) {
            carToSell.price -= carToSell.price / 20;
        }
        this.soldCars.push({model: carToSell.model, horsepower: carToSell.horsepower, soldPrice: carToSell.price});
        console.log(carToSell.price);
        this.totalIncome += carToSell.price;
        this.availableCars = this.availableCars.filter(c =>  c.model != model);
        return `${model} was sold for ${carToSell.price.toFixed(2)}$`
    } 

    currentCar() {
        let result = ['-Available cars:'];
        this.availableCars.forEach(car => {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        });
        if (result.length > 1) {
            return result.join('\n')
        }
        else {
            return "There are no available cars";
        }
    }

    salesReport(criteria) {
        let result = [];

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        if (criteria == 'horsepower') {
           this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
                

        }
        else if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
               
        }
        else {
            throw new Error('Invalid criteria!');
        }


        this.soldCars.forEach(car => result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`));

        return result.join('\n');

    }
} 

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('Audi A3', 120, 4900, 240000));
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.salesReport('horsepower'));