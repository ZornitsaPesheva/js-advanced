class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired){
            throw new Error('Not enough space in the garden.');
        }
        else {
            let plant = {plantName, spaceRequired, ripe: false, quantity: 0}
            this.plants.push(plant);
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        }
        
    }

    ripenPlant(plantName, quantity) {
        let foundPlant = this.plants.find(p => p.plantName == plantName);
        if (!foundPlant){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        else if (foundPlant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        else if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        foundPlant.ripe = true;
        foundPlant.quantity += Number(quantity);
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let foundPlant = this.plants.find(p => p.plantName == plantName);
        if (!foundPlant){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        else if (foundPlant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)

        }
        this.storage.push(`${foundPlant.plantName} (${foundPlant.quantity})`);
        this.spaceAvailable += foundPlant.spaceRequired;
        this.plants = this.plants.filter(p => p.plantName != plantName);
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = '';
        result += `The garden has ${ this.spaceAvailable } free space left.\n`;
        result += 'Plants in the garden: ';
        let plantsList = [];
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .forEach(p => plantsList.push(p.plantName));
        result += plantsList.join(', ') + '\n';
        if (this.storage.length == 0){
            result += 'Plants in storage: The storage is empty.'
        }
        else {
            result += `Plants in storage: ${this.storage.join(', ')}`;

        }
        return result;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());




