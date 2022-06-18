// https://judge.softuni.org/Contests/Practice/DownloadResource/18736

class VgetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        vegetables.forEach(v => {
            [type, quantity, price] = v.split(' ');
            let vegetable = this.availableProducts.find(v => v.type == type)
            if (vegetable) {
                vegetable.quantity += quantity;
            }
            if (price > vegetable.price) {
                vegetable.price = price;
            }
            else {
                this.availableProducts.push({type, quantity, price});
            }
        });
        let result = [];
        let types = vegetable.map(v => v.type);
        let uniques = types.reduce((v1, v2) => types.find(v => v == v2) ? v1 : [...v1, v2], []);
        uniques.forEach(v => result.push(v.type));
        return 'Successfully added' + result.join(', ');
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(v => {
            [type, quantity] = v.split(' ');
            let vegetable = this.availableProducts.find(v => v.type == type)
            if (!vegetable) {
                throw new Error(`${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`)
            }
            if (quantity > vegetable.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${totalPrice}.`)
            }
            let priceForType = vegetable.price * quantity;
            totalPrice += priceForType;
            vegetable.quantity -= quantity;
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    buyingVegetables(type, quantity){
        let vegetable = this.availableProducts.find(v => v.type == type)
        if (!vegetable) {
            throw new Error(`${type} is not available in the store.`)
        }
        if (quantity > vegetable.quantity) {
            vegetable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }
        else {
            vegetable.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }
}
